import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { URLSearchParams,HttpModule ,HTTP_PROVIDERS ,Http, Response,Headers, RequestOptions } from 'angular2/http';
import {EmailServerConfigService} from "app/services/EmailServerConfigService";
import {EmailConfig} from "app/interface/EmailConfig";
import {NgEmailSettingsGrid} from "app/components/EmailSettingsGrid/NgEmailSettingsGrid";
import 'rxjs/Rx';

@Component({
    template: `
      <ng-grid 
                [title]="title"
                [data]="data" 
                [columns]="columns"
                (onSelectionChange)="getSelectedRecord($event);" 
            >
            </ng-grid>
    `,
    directives:[CORE_DIRECTIVES,NgEmailSettingsGrid],
    providers: [EmailServerConfigService, HTTP_PROVIDERS]
})
export class EmailConfigComponent {

    public data : EmailConfig[];
   constructor(private _emailConfig: EmailServerConfigService) {}

   getContacts(){
      this._emailConfig.getContacts().subscribe(
        data => {
          this.data = data;
        }
    );
   }

   ngOnInit(){
      this.getContacts();
   }

    public title = 'Email Configurations'
  public selectedRecord = {};
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

}


