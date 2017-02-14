import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy,RouteConfig} from 'angular2/router';


import {NgPanel} from "app/components/band/NgPanel" ;
import {NgGrid} from "app/components/grid/NgGrid" ;


@Component({
    template: `
    <h1>Panels</h1>
	  <hr/>
          <ng-panel  *ngFor="#record of panelData"
           [type]="record.type"
           [header]="record.header"
           [colapsable]="record.colapsable"
           >
           {{record.header}}
           </ng-panel>
    `,
    directives:[CORE_DIRECTIVES,NgPanel,NgGrid]
})
export class PanelComponent {

    public panelData=[
        {
            type:'default',
            header:'default Colapsible',
            colapsable: true
        
        },{
            type:'primary',
            header:'primary Colapsible',
            colapsable: true
        
        },{
            type:'success',
            header:'success Colapsible',
            colapsable: true
        
        },{
            type:'info',
            header:'info',
        
        },{
            type:'warning',
            header:'warning',
        
        },{
            type:'danger',
            header:'danger',
        
        }
       
    ];

 

}

