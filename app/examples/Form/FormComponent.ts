import {Component} from "angular2/core"
import {NgForm} from "app/components/form/NgForm"
import {CORE_DIRECTIVES} from 'angular2/common'

@Component({
	template: `
	<h1>Forms</h1>
	  <hr/>
	  <ng-form [model]="properties"></ng-form>`,
	directives: [CORE_DIRECTIVES,NgForm]
})

export class FormComponent { 

	combo_data = [
		{id:1,value:"Alto"},
		{id:2,value:"Amaze"}
	];
	
	properties = [
			{type:"text",label:"Full Name",required: true},
			{type:"textarea",label:"Address",required:false},
			{type:"combo",label:"Cars",data:this.combo_data,key:"id",value:"value",required:true},
			{type:"combo",label:"Names",data:this.combo_data,key:"value",value:"id",required:false}
	];

}
