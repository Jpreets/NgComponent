
import {Component} from "angular2/core"
import {NgItemSelector} from "app/components/form/NgItemSelector"
import {CORE_DIRECTIVES} from 'angular2/common'

@Component({
	template: `
	  <h1>Item Selector</h1>
	  <hr/>
	<ng-itemselector 
	[data]="listData"
	[selectedData]="selectedData"  >
	</ng-itemselector>
	`,
	directives: [CORE_DIRECTIVES,NgItemSelector]
})

export class ItemSelectorComponent { 
	
	selectedData =[{
		body: 'First',
		id: 1,
		type:'default',
		disable : false
	},
	{
		body: 'Eight',
		id: 8,
		type:'default',
		disable : false
	},{
		body: 'Nine',
		id: 9,
		type:'default',
		disable : false
	},
	{
		body: 'Ten',
		id: 10,
		type:'default',
		disable : false
	}];
	listData = [
	{
		body: 'Second',
		id: 2,
		type:'success',
		disable : false
	},
	{
		body: 'Third',
		id: 3,
		type:'info',
		disable : false
	},
	{
		body: 'Fourth',
		id: 4,
		type:'warning',
		disable : false
	},
	{
		body: 'Five',
		id: 5,
		type:'danger',
		disable : false
	}
	,
	{
		body: 'Six',
		id: 7,
		type:'default',
		disable : true
	}
	];

}
