import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy,RouteConfig} from 'angular2/router';


import {NgBand} from "app/components/band/NgBand" ;
import {NgBands} from "app/components/band/NgBands" ;



@Component({
    template: `
     <ng-bands>
         <ng-band  *ngFor="#record of bandData">
               <a  href="#{{record.link}}" >
                    <p><strong>{{record.label}}</strong></p>
                    <img src="{{record.img}}" style=" width: 300px; height: 200px;" >
              </a>
         </ng-band>
     <ng-bands>
    `,
    directives:[CORE_DIRECTIVES,NgBands,NgBand]
})
export class BandComponent {

    public bandData=[
        {
            img:'../images/tab.png',
            label:'Tabs',
            link:'/TabComponent'
        },
        {
            img:'../images/table.png',
            label:'Grid',
            link:'/GridComponent'
        },
        {
            img:'../images/popup.png',
            label:'Popup',
            link:'/PopupComponent'
        },
        {
            img:'../images/tab.png',
            label:'Band',
            link:'/'
        },
        {
            img:'../images/form.png',
            label:'Forms',
            link:'/FormComponent'
        },
        {
            img:'../images/tree.jpeg',
            label:'Tree View',
            link:'/TreeComponent'
        }
    ];


 

}

