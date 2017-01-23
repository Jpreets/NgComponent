import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { NgTab } from 'app/components/tab/NgTab';


@Component({
  selector: 'ng-tabs',
  template:`
    <ul class="nav nav-tabs">
      <li *ngFor="#tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
         <a href="#">{{tab.title}}</a>
       </li>
    </ul>
        <ng-content></ng-content>

  `,
  directives: [CORE_DIRECTIVES]
})
export class NgTabs implements AfterContentInit {
  
  @ContentChildren(NgTab) tabs: QueryList<NgTab>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: NgTab){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
