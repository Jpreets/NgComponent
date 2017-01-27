import {Component} from "angular2/core"
import {NgTree} from "app/components/tree/NgTree"
import {CORE_DIRECTIVES} from 'angular2/common'

@Component({
    template:`<ng-tree [data]="tree_data"></ng-tree>`,
    directives: [CORE_DIRECTIVES,NgTree]
})

export class TreeComponent{ 
    
    tree_data = [
		{
			label: 'a1',
			subs: [
				{
					label: 'a11',
					subs: [
						{
							label: 'a111',
							subs: [
								{
									label: 'a1111'
								},
								{
									label: 'a1112'
								}
							]
						},
						{
							label: 'a112'
						}
					]
				},
				{
					label: 'a12',
				}
			]
		},
		{
			label: 'b1',
			subs: [
				{
					label: 'b11',
				},
				{
					label: 'b12',
				}
			]
		}
	];
                

} 