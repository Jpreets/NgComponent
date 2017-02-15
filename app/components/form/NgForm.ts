import {Component,Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule} from "angular2/core"
import {SelectComponent} from "app/components/form/SelectComponent"
import {NgRadioButtons} from "app/components/RadioButtons/NgRadioButtons"
import {NgCheckBox} from "app/components/CheckBox/NgCheckBox"

@Component({
	selector: 'ng-form',
	templateUrl: 'app/components/form/form.html',
	directives: [SelectComponent,NgRadioButtons,NgCheckBox]
})

export class NgForm{ 
	@Input() model:[];
	constructor() {
    console.log(this.model); // here it prints `null`
	  }
        name = "vehicles";
        data = [
            {id:1,value:"Bike"},
            {id:2,value:"Car"}
        ];
        value=1;
        value_check=[1];
	  ngOnInit() {
	    console.log(this.model); // here it prints the actual value
	  }
}
