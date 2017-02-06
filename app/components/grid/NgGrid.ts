
import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';


@Component({
   selector: 'ng-grid',
  template:` 
 
        <div class="generic-container">
            <div class="panel panel-default">
                <!-- Default panel contents -->
                <div class="panel-heading">
                    <span class="lead"> {{ title }} </span><br>
               </div>
                <div style="overflow-x:auto;" class="table-responsive">

                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th *ngFor="#col of columns"> {{ col.value }}</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr *ngFor="#record of data" 
                                (click)="selectRow(record)" 
                                [ngClass]="{selected: record.id === selectedRecord.id}">

                                    <td *ngFor="#col of columns"> {{ record[col.id] }}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
       
    </div>` ,
 directives: [CORE_DIRECTIVES]

})

export class NgGrid {

  @Input() public title='';
  @Input() public columns=[];
  @Input() public data=[];
   public selectedRecord = {};

  @Output() onSelectionChange = new EventEmitter();

  selectRow(record) {
    this.selectedRecord= record;
     this.onSelectionChange.emit(this.selectedRecord);

  }

 

}