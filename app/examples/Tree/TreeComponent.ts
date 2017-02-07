import {Component} from "angular2/core"
import {NgTree} from "app/components/tree/NgTree"
import {CORE_DIRECTIVES} from 'angular2/common'

@Component({
    template:`<ng-tree [data]="tree_data" [expandItems]="expand_items" [checkedItems]="checked_items"></ng-tree>`,
    directives: [CORE_DIRECTIVES,NgTree]
})

export class TreeComponent{ 
    
    tree_data = [
		{
			label: 'a1',
			id:1,
			expandable:true,
			checked:false,
			subs: [
				{
					label: 'a11',
					id:1.1,
					expandable:false,
					checked:false,
					subs: [
						{
							label: 'a111',
							id:1.11,
							expandable:false,
							checked:false,
							subs: [
								{
									label: 'a1111',
									id:1.111,
									expandable:false,
									checked:true
								},
								{
									label: 'a1112',
									id:1.112,
									expandable:false,
									checked:false
								}
							]
						},
						{
							label: 'a112',
							id:1.12,
							expandable:false,
							checked:false
						}
					]
				},
				{
					label: 'a12',
					id:1.2,
					expandable:true,
					checked:false
				}
			]
		},
		{
			label: 'b1',
			id:2,
			expandable:false,
			checked:true,
			subs: [
				{
					label: 'b11',
					id:2.1,
					expandable:false,
					checked:true
				},
				{
					label: 'b12',
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