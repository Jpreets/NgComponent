import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { URLSearchParams,HttpModule ,HTTP_PROVIDERS ,Http, Response,Headers, RequestOptions } from 'angular2/http';
import {EmailServerConfigService} from "app/services/EmailServerConfigService";
import {EmailConfig} from "app/interface/EmailConfig";
import {NgGrid} from "app/components/grid/NgGrid";
import {NgPopup} from "app/components/popup/NgPopup" ;
import {NgForm} from "app/components/form/NgForm";
import 'rxjs/Rx';

@Component({
    template: `
    <button type="button" (click)="showAddPopup()" class="btn btn-primary"><i class="fa fa-plus-circle" aria-hidden="true"></i>
                Add</button>
    <button [ngClass]="{disabled : !selectedRecord.id}" (click)="showEditPopup()" type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Edit</button>
    <button [ngClass]="{disabled : !selectedRecord.id}" (click)="delete()" type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Delete</button>
      <ng-grid 
                [title]="title"
                [data]="data" 
                [columns]="columns"
                (onSelectionChange)="getSelectedRecord($event);" 
                [dialogActive]="dialogAddEditActive"
                [selectedRecord]="selectedRecord"
            >
            </ng-grid>
            <ng-popup
             [title]="title"
             [dialogActive]="dialogActive" 
             [hidden]="!showError"
            >
             <h3>Server Down</h3>
          </ng-popup>
          <ng-popup
             [title]="title"
             [dialogActive]="dialogAddEditActive" 
          >
            <ng-form 
              [model]="properties" 
              [selectedRecord]="selectedRecord"
              (onSubmitEvent)="edit ? editEmailConfig($event) : addEmailConfig($event)" >
            </ng-form>
                 
          </ng-popup>
    `,
    directives:[CORE_DIRECTIVES,NgGrid,NgPopup,NgForm],
    providers: [EmailServerConfigService, HTTP_PROVIDERS]
})
export class EmailConfigComponent {

    public selectedRecord = {};
    public data = [];
    
    public value;
    public value_check=[];
    public showError =  false;
    public edit = false;
    combo_data = [
		{id:1,value:"Alto"},
		{id:2,value:"Amaze"}
	];
    checkRadioData = [
            {id:1,value:"Bike"},
            {id:2,value:"Car"}
        ];
    
    constructor(private _emailConfig: EmailServerConfigService,
                    private http: Http) {}
    
    public dialogActive ={bool : false};
    public dialogAddEditActive ={bool : false}

     showAddPopup(){                                                                                                                                                                                                                                                            
        this.selectedRecord = {};
        this.selectedRecord.checkId=[];
        this.edit = false;
        this.dialogAddEditActive.bool = true;
     }
     
     closeAddPopup(){
        this.dialogAddEditActive.bool = false;
     }
     showEditPopup(){
        this.value_check=[];
        this.edit = true;                                                                                                                                                                                                                                                         
        this.dialogAddEditActive.bool = true;
        console.log(this.data);
        for(var i=0;i<this.checkRadioData.length;i++){
          if(this.checkRadioData[i].value == this.selectedRecord.vehicleRadio){
            this.selectedRecord.radioId = this.checkRadioData[i].id;
          }
        }
        this.selectedRecord.checkId=[];
        for(var i=0;i<this.selectedRecord.checkBox.length;i++){
          this.selectedRecord.checkId.push(this.selectedRecord.checkBox[i].checkId);
        }
        console.log(this.selectedRecord);
    }
     
     closeEditPopup(){
        this.dialogAddEditActive.bool = false;
     }
     showPopup(){
        this.dialogActive.bool =true;
      }

      closePopup(){
        this.dialogActive.bool =false;
      }

   getContacts(){
      this._emailConfig.getContacts().subscribe(
        data => {
          this.data = data;
        }
        err => {
            this.showError = true;
            this.showPopup();
        }
    );
   }

   ngOnInit(){
      this.getContacts();
      console.log(this.data);                                                                                                                                                                                                                                                             
  }

   properties = [
                  {type:"text",label:"smtpHost", name: "smtpHost",required: true},
                  {type:"text",label:"smtpPort", name:"smtpPort",required: true},
                  {type:"text",label:"smtpUsername", name:"smtpUsername",required: true},
                  {type:"password",label:"smtpPassword", name:"smtpPassword",required: true},
                  {type:"radio",label:"vehicle", name:"vehicleRadio", value:this.value, checkRadioData:this.checkRadioData, required: true},
                  {type:"check",label:"vehicles", name:"vehicleCheck", value_check: this.value_check,checkRadioData:this.checkRadioData, required: true}
            ];
    public title = 'Email Configurations'
  
  public columns=[
    {id:'id', value:'#'},
    {id:'smtpHost', value:'Host'},
    {id:'smtpPort', value:'Port'},
    {id:'smtpUsername', value:'Username'},
    {id:'smtpPassword', value:'Password'},
    {id:'vehicleRadio', value:'Vehicle'},
    {id:'vehicleCheck', value:'Vehicles'}
      ];
    

  getSelectedRecord(event) {
       this.selectedRecord= event;
       console.log(event);
  }

    editEmailConfig(record){
      if(record.vehicleCheck == undefined)
        record.vehicleCheck = [];
      checkId = [];
      for(var i=0;i<record.vehicleCheck.length;i++){
        for(var j=0;j<this.checkRadioData.length;j++){
          if(record.vehicleCheck[i] == this.checkRadioData[j].value){
            checkId.push(this.checkRadioData[j].id);
          }
        }
      }
      console.log(checkId);
        let data = new URLSearchParams();
        data.append('id', record.id);
        data.append('smtpHost', record.smtpHost);
        data.append('smtpPort', record.smtpPort);
        data.append('smtpUsername', record.smtpUsername);
        data.append('smtpPassword', record.smtpPassword);
        data.append('vehicleRadio', record.vehicleRadio);
        data.append('vehicleCheck', record.vehicleCheck);
        data.append('checkId', checkId);
        data.append('email', "anshulgupta231193@gmail.com");
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.http
          .post('http://localhost:8084/EmailChimp/update-email-configuration', data, {
                headers: headers
              })
            .subscribe(data => {
                  this.closeEditPopup();
            }, error => {
                console.log(error.json());
            });
    }
    
    addEmailConfig(record){
      if(record.vehicleCheck == undefined)
        record.vehicleCheck = [];
      checkId = [];
      for(var i=0;i<record.vehicleCheck.length;i++){
        for(var j=0;j<this.checkRadioData.length;j++){
          if(record.vehicleCheck[i] == this.checkRadioData[j].value){
            checkId.push(this.checkRadioData[j].id);
          }
        }
      }
      console.log(checkId);
        let data = new URLSearchParams();
        data.append('smtpHost', record.smtpHost);
        data.append('smtpPort', record.smtpPort);
        data.append('smtpUsername', record.smtpUsername);
        data.append('smtpPassword', record.smtpPassword);
        data.append('vehicleRadio', record.vehicleRadio);
        data.append('vehicleCheck', record.vehicleCheck);
        data.append('checkId', checkId);
        data.append('email', "anshulgupta231193@gmail.com");
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.http
          .post('http://localhost:8084/EmailChimp/add-email-configuration', data, {
                headers: headers
              })
            .subscribe(data => {
                 this.closeAddPopup();
                 window.location.reload();            

            }, error => {
                console.log(error.json());
            });
    }

}


