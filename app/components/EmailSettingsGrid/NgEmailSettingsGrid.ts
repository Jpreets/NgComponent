
import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { URLSearchParams,HttpModule ,HTTP_PROVIDERS ,Http, Response,Headers, RequestOptions } from 'angular2/http';
import {NgPopup} from "app/components/popup/NgPopup" ;
import 'rxjs/Rx';


@Component({
   selector: 'ng-grid',
  template:` 
 
        <div class="generic-container">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">
                    <span class="lead"> {{ title }} </span><br>
               </div>
               <button type="button" (click)="showPopup()" class="btn btn-primary"><i class="fa fa-plus-circle" aria-hidden="true"></i>
                Add</button>
                <button *ngIf="!selectedRecord.id" type="button" class="btn btn-info disabled"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Edit</button>
                <button *ngIf="selectedRecord.id" (click)="showEditPopup()" type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Edit</button>
                <button *ngIf="!selectedRecord.id" type="button" class="btn btn-info disabled"><i class="fa fa-trash" aria-hidden="true"></i>
                Delete</button>
                <button *ngIf="selectedRecord.id" (click)="delete()" type="button" class="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                Delete</button>

                 <ng-popup
                    [title]="title"
                    [dialogActive]="dialogActive" 
                   >
                    <form (ngSubmit)="addEmailConfig()">
                        <div class="form-group">
                          <label for="host">SMTP HOST</label>
                          <input type="text" class="form-control"  required
                            [(ngModel)]="host"   ngControl="hostctrl" #hostctrl="ngForm"
                              >
                          <div [hidden]="hostctrl.valid || hostctrl.pristine" class="alert alert-danger">
                            Host is required
                          </div>
                        </div>
                        
                        <div class="form-group">
                          <label for="port">SMTP PORT</label>
                          <input type="text" class="form-control"  required
                            [(ngModel)]="port"   ngControl="portctrl" #portctrl="ngForm"
                              >
                          <div [hidden]="portctrl.valid || portctrl.pristine" class="alert alert-danger">
                            Port is required
                          </div>
                        </div>

                        <div class="form-group">
                          <label for="username">USERNAME</label>
                          <input type="text" class="form-control"  required
                            [(ngModel)]="username"   ngControl="userctrl" #userctrl="ngForm"
                              >
                          <div [hidden]="userctrl.valid || userctrl.pristine" class="alert alert-danger">
                            Username is required
                          </div>
                        </div>

                        <div class="form-group">
                          <label for="password">PASSWORD</label>
                          <input type="password" class="form-control"  required
                            [(ngModel)]="password"   ngControl="pswdctrl" #pswdctrl="ngForm"
                              >
                          <div [hidden]="pswdctrl.valid || pswdctrl.pristine" class="alert alert-danger">
                            Password is required
                          </div>
                        </div>
                        
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                 </ng-popup>
                 
                 <ng-popup
                    [title]="title"
                    [dialogActive]="dialogEditActive" 
                   >
                    <form (ngSubmit)="editEmailConfig(selectedRecord)">
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
                <div style="overflow-x:auto;" class="table-responsive">

                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th *ngFor="#col of columns"> {{ col.value }}</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr *ngFor="#record of data" 
                                (click)="selectRow(record)" 
                                [ngClass]="{selected: record.id === selectedRecord.id}">

                                    <td *ngFor="#col of columns"> {{ record[col.id] }}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
       
    </div>` ,
 directives: [CORE_DIRECTIVES, NgPopup]

})

export class NgEmailSettingsGrid {

  @Input() public title='';
  @Input() public columns=[];
  @Input() public data=[];
  @Output() public selectedRecord;

    public host: string;
    public port: string;
    public username: string;
    public password: string;
    public dialogActive ={bool : false};
    public dialogEditActive ={bool : false};
    showEditPopup(){
       this.dialogEditActive.bool =true;
     }

     closeEditPopup(){
       this.dialogEditActive.bool =false;
     }

    showPopup(){
       this.dialogActive.bool =true;
     }

     closePopup(){
       this.dialogActive.bool =false;
     }
     @Output() onSelectionChange = new EventEmitter();

  constructor(private http: Http) {}

  selectRow(record) {
    this.selectedRecord= record;
     this.onSelectionChange.emit(this.selectedRecord);

  }
    
    editEmailConfig(record){
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
                 // window.location.reload();
            }, error => {
                console.log(error.json());
            });
    }
    addEmailConfig(){
        let data = new URLSearchParams();
        data.append('smtpHost', this.host);
        data.append('smtpPort', this.port);
        data.append('smtpUsername', this.username);
        data.append('smtpPassword', this.password);
        data.append('email', "anshulgupta231193@gmail.com");
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.http
          .post('http://localhost:8084/EmailChimp/add-email-configuration', data, {
                headers: headers
              })
            .subscribe(data => {
               //   window.location.reload();
            }, error => {
                console.log(error.json());
            });
    }
  
  delete(){
        console.log(this.selectedRecord);
        let data = new URLSearchParams();
        data.append('email', "anshulgupta231193@gmail.com");
        data.append('id', this.selectedRecord.id);
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.http
          .post('http://localhost:8084/EmailChimp/delete-email-configuration', data, {
                headers: headers
              })
            .subscribe(data => {
                  confirm('confirm delete!!');
                  window.location.href="";
            }, error => {
                console.log(error.json());
            });
  }

 

}
