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
        @Input() gridData:[];
        @Input() public selectedRecord;
        @Output() onSubmitEvent = new EventEmitter();
	    @Input() public value_check=[];
        public vehicleRadio;

        constructor() {}
        
        name = "vehicles";
        
        
        ngOnInit(){
        }
        getSelectedValue(event){
            if(!this.selectedRecord.id){
                this.selectedRecord.vehicleRadio = event.value;
            }
            for(var i=0;i<this.gridData.length;i++){
                if(this.gridData[i].id == this.selectedRecord.id){
                    // this.gridData[i].vehicleRadio = event.value;
                    this.selectedRecord.vehicleRadio = event.value;
                }
            }
        }

        getSelectedCheck(event){
            if(!this.selectedRecord.id){
                this.selectedRecord.vehicleCheck = event;
            }
            for(var i=0;i<this.gridData.length;i++){
                if(this.gridData[i].id == this.selectedRecord.id){
                    // this.gridData[i].vehicleCheck = event;
                    this.selectedRecord.vehicleCheck = event;
                }
            }
        }

        onSubmit(form: NgForm) {
            console.log(this.selectedRecord);
            this.onSubmitEvent.emit(this.selectedRecord);
            this.value_check=[];
            this.selectedRecord=[];
            this.value=-1;
            console.log(this.value_check+" "+this.value);
        }
}
