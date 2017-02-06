import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {NgTabs} from "app/components/tab/NGTabs" ;
import {NgTab} from  "app/components/tab/NgTab";


@Component({
    template: `
     <ng-tabs>
        <ng-tab [title]="'Home'"> 
            <h3>HOME</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         </ng-tab>
        <ng-tab [title]="'Menu 1'"> 
            <h3>Menu 1</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </ng-tab>
        <ng-tab [title]="'Menu 2'">     
          <h3>Menu 2</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </ng-tab>
        <ng-tab [title]="'Menu 3'">     
          <h3>Menu 3</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </ng-tab>
    </ng-tabs>
    `,
    directives:[CORE_DIRECTIVES,NgTabs,NgTab]
})
export class TabComponent {

 

}

