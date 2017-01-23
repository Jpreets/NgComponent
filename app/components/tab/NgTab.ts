import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'ng-tab',
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})

export class NgTab {
  @Input() title: string;
  @Input() active = false;
}