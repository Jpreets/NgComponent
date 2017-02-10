import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from 'angular2/common'
import {NgRadioButtons} from "app/components/RadioButtons/NgRadioButtons"

@Component({
    template: '<ng-radiobuttons [name]="name" [value]="value" [data]="data"></ng-radiobuttons>',
    directives: [CORE_DIRECTIVES,NgRadioButtons]
})

export class RadioButtonsComponent { 

    name = "vehicles";
    data = [
        {id:1,value:"Bike"},
        {id:2,value:"Car"}
    ];
    value=1;
}
