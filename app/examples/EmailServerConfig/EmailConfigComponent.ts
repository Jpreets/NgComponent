import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { URLSearchParams,HttpModule ,HTTP_PROVIDERS ,Http, Response,Headers, RequestOptions } from 'angular2/http';
import {EmailServerConfigService} from "app/services/EmailServerConfigService";
import {EmailConfig} from "app/interface/EmailConfig";
import {NgGrid} from "app/components/grid/NgGrid";
import {NgPopup} from "app/components/popup/NgPopup" ;
import 'rxjs/Rx';

@Component({
    template: `
    <button type="button" (click)="showAddPopup()" class="btn btn-primary"><i class="fa fa-plus-circle" aria-hidden="true"></i>
                Add</button>
    <button *ngIf="!selectedRecord.id" type="button" class="btn btn-info disabled"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Edit</button>
    <button *ngIf="selectedRecord.id" (click)="showEditPopup()" type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Edit</button>
    <button *ngIf="!selectedRecord.id" type="button" class="btn btn-info disabled"><i class="fa fa-trash" aria-hidden="true"></i>
                Delete</button>
    <button *ngIf="selectedRecord.id" (click)="delete()" type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
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
                    <form (ngSubmit)="edit ? editEmailConfig(selectedRecord) : addEmailConfig()">
                        <div class="form-group">
                          <label for="host">SMTP HOST</label>
                          <input type="text" class="form-control"  required
                            [(ngModel)]="selectedRecord.smtpHost"   ngControl="hostctrl" #hostctrl="ngForm"
                              >
                          <div [hidden]="hostctrl.valid || hostctrl.pristine" class="alert alert-danger">
                            Host is required
                          </div>
                        </div>
                        
                        <div class="form-group">
                          <label for="port">SMTP PORT</label>
                          <input type="text" class="form-control"  required
                            [(ngModel)]="selectedRecord.smtpPort"   ngControl="portctrl" #portctrl="ngForm"
                              >
                          <div [hidden]="portctrl.valid || portctrl.pristine" class="alert alert-danger">
                            Port is required
                          </div>
                        </div>

                        <div class="form-group">
                          <label for="username">USERNAME</label>
                          <input type="text" class="form-control"  required
                            [(ngModel)]="selectedRecord.smtpUsername"   ngControl="userctrl" #userctrl="ngForm"
                              >
                          <div [hidden]="userctrl.valid || userctrl.pristine" class="alert alert-danger">
                            Username is required
                          </div>
                        </div>

                        <div class="form-group">
                          <label for="password">PASSWORD</label>
                          <input type="password" class="form-control"  required
                            [(ngModel)]="selectedRecord.smtpPassword"   ngControl="pswdctrl" #pswdctrl="ngForm"
                              >
                          <div [hidden]="pswdctrl.valid || pswdctrl.pristine" class="alert alert-danger">
                            Password is required
                          </div>
                        </div>
                        
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
          </ng-popup>
    `,
    directives:[CORE_DIRECTIVES,NgGrid,NgPopup],
    providers: [EmailServerConfigService, HTTP_PROVIDERS]
})
export class EmailConfigComponent {

    public selectedRecord = {};
    public data : EmailConfig[];
    public showError =  false;
    public edit = false;
    constructor(private _emailConfig: EmailServerConfigService,
                    private http: Http) {}
    
    public dialogActive ={bool : false};
    public dialogAddEditActive ={bool : false}

     showAddPopup(){
        this.selectedRecord = {};
        this.edit = false;
        this.dialogAddEditActive.bool = true;
     }
     
     closeAddPopup(){
        this.selectedRecord = {};
        this.dialogAddEditActive.bool = false;
     }
     showEditPopup(){
        this.edit = true;
        this.dialogAddEditActive.bool = true;
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
   }

    public title = 'Email Configurations'
  
  public columns=[
    {id:'id', value:'#'},
    {id:'smtpHost', value:'Host'},
    {id:'smtpPort', value:'Port'},
    {id:'smtpUsername', value:'Username'},
    {id:'smtpPassword', value:'Password'}
      ];


  getSelectedRecord(event) {
       this.selectedRecord= event;
       console.log(this.selectedRecord);
  }

    editEmailConfig(record){
        console.log(record);
        let data = new URLSearchParams();
        data.append('id', record.id);
        data.append('smtpHost', record.smtpHost);
        data.append('smtpPort', record.smtpPort);
        data.append('smtpUsername', record.smtpUsername);
        data.append('smtpPassword', record.smtpPassword);
        data.append('email', "anshulgupta231193@gmail.com");
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.http
          .post('http://localhost:8084/EmailChimp/update-email-configuration', data, {
                headers: headers
              })
            .subscribe(data => {
                  window.location.reload();
            }, error => {
                console.log(error.json());
            });
    }
    addEmailConfig(){
        console.log(this.selectedRecord);
        let data = new URLSearchParams();
        data.append('smtpHost', this.selectedRecord.smtpHost);
        data.append('smtpPort', this.selectedRecord.smtpPort);
        data.append('smtpUsername', this.selectedRecord.smtpUsername);
        data.append('smtpPassword', this.selectedRecord.smtpPassword);
        data.append('email', "anshulgupta231193@gmail.com");
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.http
          .post('http://localhost:8084/EmailChimp/add-email-configuration', data, {
                headers: headers
              })
            .subscribe(data => {
                  window.location.reload();
            }, error => {
                console.log(error.json());
            });
    }

}


