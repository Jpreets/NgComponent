import {Component, Pipe, PipeTransform, Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule,Output,EventEmitter} from "angular2/core"
import {SelectComponent} from "app/components/form/SelectComponent"
import {NgRadioButtons} from "app/components/RadioButtons/NgRadioButtons"
import {NgCheckBox} from "app/components/CheckBox/NgCheckBox"

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, arg) : any {

    for (let key in value) {
        if(key == arg[0].label){
            return value[key];
        }
    }

    return null;
  }
} 

@Component({
	selector: 'ng-form',
	templateUrl: 'app/components/form/form.html',
	directives: [SelectComponent,NgRadioButtons,NgCheckBox],
    pipes:[KeysPipe]
})

export class NgForm{ 
	    @Input() model:[];
        @Input() public selectedRecord;
        @Output() onSubmitEvent = new EventEmitter();
	    
        constructor() {}

        name = "vehicles";
        data = [
            {id:1,value:"Bike"},
            {id:2,value:"Car"}
        ];
        value=1;
        value_check=[1];
        
        onSubmit(form: NgForm) {
            this.onSubmitEvent.emit(this.selectedRecord);
        }
}
