import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from 'angular2/common'
import {NgCheckBox} from "app/components/CheckBox/NgCheckBox"

@Component({
    template: '<ng-checkbox [name]="name" [value]="value" [data]="data"></ng-checkbox>',
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