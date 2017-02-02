import {Component,Input} from "angular2/core"

@Component({
	selector:'ng-select',
	template:`
		<select *ngIf="select_data.key=='id'" class="form-control">
			<option *ngFor="#data of select_data.data" id={{data.id}} value={{data.value}}>{{data.value}}</option>
		</select>
		<select *ngIf="select_data.key=='value'" class="form-control">
			<option *ngFor="#data of select_data.data" id={{data.value}} value={{data.id}}>{{data.id}}</option>
		</select>
	`
})

export class SelectComponent { 
	
	@Input() select_data:[];

	constructor() {
    console.log(this.select_data); // here it prints `null`
	  }

	  ngOnInit() {
	    console.log(this.select_data); // here it prints the actual value
	  }
}
