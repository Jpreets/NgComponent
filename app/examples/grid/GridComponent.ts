import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {NgGrid} from "app/components/grid/NgGrid" ;


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
    directives:[CORE_DIRECTIVES,NgGrid]
})
export class GridComponent {

  public title = 'My Grid'
  public selectedRecord = {};
  public columns=[
    {id:'name', value:'Name'},
    {id:'email', value:'Email'},
    {id:'phone', value:'Phone'},
    {id:'sex', value:'Sex'},
    {id:'t', value:'Test'}
      ];

   public data=[{
    id:1,
    name: 'Jaspreet',
    email:'jpreet.singh20@gmail.com',
    phone:'990099009900',
    sex:'Male',
    t:'12345'
    },
  {
    id:2,
    name: 'Jaspreet',
    email:'jpreet.singh20@gmail.com',
    phone:'990099009900',
    sex:'Male'
  },
  {
    id:3,
    name: 'Jaspreet',
    email:'jpreet.singh20@gmail.com',
    phone:'990099009900',
    sex:'Male'
  },
    {
    id:4,
    name: 'Jaspreet',
    email:'jpreet.singh20@gmail.com',
    phone:'990099009900',
    sex:'Male'
  },
    {
    id:5,
    name: 'Jaspreet',
    email:'jpreet.singh20@gmail.com',
    phone:'990099009900',
    sex:'Male'
  },];

  getSelectedRecord(event) {
       this.selectedRecord= event;

  }


}

