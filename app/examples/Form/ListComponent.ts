
import {Component} from "angular2/core"
import {NgList} from "app/components/form/NgList"
import {CORE_DIRECTIVES} from 'angular2/common'

@Component({
	template: `<ng-list [data]="listData" 
						 [selectable]="selectable">
			  </ng-list>`,
	directives: [CORE_DIRECTIVES,NgList]
})

export class ListComponent { 
	selectable=true;
	listData = [{
		body: 'First',
		id: 1,
		type:'default',
		disable : false
	},
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
