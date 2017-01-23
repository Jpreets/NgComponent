import {Component,Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule} from "angular2/core"
import {SelectComponent} from "app/components/form/SelectComponent"

@Component({
	selector: 'ng-form',
	templateUrl: 'app/components/form/form.html',
	directives: [SelectComponent]
})

export class NgForm{ 
	@Input() model:[];
	constructor() {
    console.log(this.model); // here it prints `null`
	  }

	  ngOnInit() {
	    console.log(this.model); // here it prints the actual value
	  }
}
