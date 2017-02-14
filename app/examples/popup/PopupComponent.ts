import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {NgPopup} from "app/components/popup/NgPopup" ;



@Component({
    template: `
    <h1>Popup's</h1>
	  <hr/>
      <button class="btn btn-default" (click)="showPopup()">Show Popup</button>

          <ng-popup
             [title]="title"
             [dialogActive]="dialogActive" 
            >
             Hello
          </ng-popup>
    `,
    directives:[CORE_DIRECTIVES,NgPopup]
})
export class PopupComponent {

  public title = 'My Popup'

 public dialogActive ={bool : false};

 showPopup(){
    this.dialogActive.bool =true;
  }

  closePopup(){
    this.dialogActive.bool =false;
  }

}

