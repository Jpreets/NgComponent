


import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, 
   Input ,Output,EventEmitter,AfterViewInit,OnInit,ViewChild,ElementRef,ViewContainerRef } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';


@Component({
  selector: 'ng-panel',
  template:`
  <div class="panel panel-{{type}}">
      <div class="panel-heading" [innerHTML]="header" (click)="colapse()" ></div>
       <div class="panel-body" *ngIf="active.bool" >
        <ng-content></ng-content>
       </div>
  </div>
  `,
  directives: [CORE_DIRECTIVES]
})


export class NgPanel {
  
    @Input() public type='default';
     @Input() public header='default';
     @Input() public colapsable:boolean= false;

      @Input() public active ={bool : true};

  colapse(){
    if(!this.colapsable){
      return;
    }
    this.active.bool = !this.active.bool ;
  }
   

}