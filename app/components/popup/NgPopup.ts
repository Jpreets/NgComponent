
import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
   selector: 'ng-popup'
})

@View({
  template: `
  <div class="modal show"  role="dialog" *ngIf="dialogActive.bool" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" (click)="closePopup()" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body">
         <div class="generic-container"     style="overflow: auto;">
          <ng-content></ng-content>             
        </div>
        </div>
      </div>
    </div>
  </div>`,
 directives: [CORE_DIRECTIVES]

})

export class NgPopup {

 @Input() public title='';
 @Input() public dialogActive;

    ngOnInit(){
   }
 closePopup(){
    this.dialogActive.bool =false;
  }

}