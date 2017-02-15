import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from 'angular2/common'
import {NgCheckBox} from "app/components/CheckBox/NgCheckBox"

@Component({
    template: `<div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead"> CheckBox </span><br>
           </div>
            <ng-checkbox [name]="name" [value]="value" [data]="data"></ng-checkbox>
            </div>`,
    directives: [CORE_DIRECTIVES,NgCheckBox]
})

export class CheckBoxComponent { 

    name = "vehicles";
    data = [
        {id:1,value:"Bike"},
        {id:2,value:"Car"}
    ];
    value=[1];
}