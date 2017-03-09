import {Component,Input} from "angular2/core"

@Component({
	selector:'ng-select',
	template:`
		<select class="form-control" [(ngModel)]="selectedCombo">
			<option *ngFor="#data of select_data.data"
			 value={{data[select_data.key]}} >{{data[select_data.value]}}</option>
		</select>
	`
})

export class SelectComponent { 
	
	@Input() select_data:[];
	@Input() selectedCombo;
	ngOnInit(){
	 console.log('tttt'+this.selectedCombo);
	}
	
}
