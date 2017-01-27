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
                        name:"parent1",
                        child:[
                            {name:"firstchild"},
                            {name:"secondchild"}
                        ]
                    },
                    {
                        name:"parent2",
                        child:[
                            {name:"firstchild"},
                            {name:"secondchild"},
                            {name:"thirdchild"}
                        ]
                    }
                    
                ];
                

} 