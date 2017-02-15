import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from 'angular2/common'
import {NgRadioButtons} from "app/components/RadioButtons/NgRadioButtons"

@Component({
    template: `
        <div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead"> Radio Buttons </span><br>
           </div>
        <ng-radiobuttons [name]="name" [value]="value" [data]="data"></ng-radiobuttons>
        </div>`,
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
