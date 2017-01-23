

import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import { NgBand } from 'app/components/band/NgBand';


@Component({
  selector: 'ng-bands',
  template:`
  <div class="row text-center">
     <ng-content ></ng-content>    
  </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class NgBands  {
  
  @ContentChildren(NgBand) bands: QueryList<NgBand>;
  

}