import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {NgTabs} from "app/components/tab/NGTabs" ;
import {NgTab} from  "app/components/tab/NgTab";


@Component({
    template: `
     <ng-tabs>
        <ng-tab [title]="'Tab1'"> Tab1 Detail </ng-tab>
        <ng-tab [title]="'Tab2'"> Tab2 Detail </ng-tab>
        <ng-tab [title]="'Tab3'"> Tab3 Detail </ng-tab>
        <ng-tab [title]="'Tab4'"> Tab4 Detail </ng-tab>
    </ng-tabs>
    `,
    directives:[CORE_DIRECTIVES,NgTabs,NgTab]
})
export class TabComponent {

 

}

