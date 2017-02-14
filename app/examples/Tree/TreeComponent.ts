import {Component} from "angular2/core"
import {NgTree} from "app/components/tree/NgTree"
import {CORE_DIRECTIVES} from 'angular2/common'

@Component({
    template:`
	<h1>Tree </h1>
	  <hr/>
	  <ng-tree [data]="tree_data" [expandItems]="expand_items" [checkedItems]="checked_items"></ng-tree>`,
    directives: [CORE_DIRECTIVES,NgTree]
})

export class TreeComponent{ 
    
    tree_data = [
		{
			label: 'A',
			id:1,
			expandable:false,
			checked:false,
			subs: [
				{
					label: 'A.A',
					id:1.1,
					expandable:false,
					checked:false,
					subs: [
						{
							label: 'A.A.A',
							id:1.11,
							expandable:false,
							checked:false,
							subs: [
								{
									label: 'A.A.A.A',
									id:1.111,
									expandable:false,
									checked:true
								},
								{
									label: 'A.A.A.B',
									id:1.112,
									expandable:false,
									checked:false
								}
							]
						},
						{
							label: 'A.A.B',
							id:1.12,
							expandable:false,
							checked:false
						}
					]
				},
				{
					label: 'A.B',
					id:1.2,
					expandable:true,
					checked:false
				}
			]
		},
		{
			label: 'B',
			id:2,
			expandable:false,
			checked:true,
			subs: [
				{
					label: 'B.A',
					id:2.1,
					expandable:false,
					checked:true
				},
				{
					label: 'B.B',
					id:2.2,
					expandable:false,
					checked:true
				}
			]
		}
	];
    
	expand_items = [];
	checked_items = [];

} 