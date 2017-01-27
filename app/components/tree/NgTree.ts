import {Pipe,PipeTransform,Component,Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"

@Component({
	selector: 'node',
	directives: [CORE_DIRECTIVES, Node],
	template: `
        <li>
                <a class ="iconButton" (click)="toggle()"> <i class="material-icons">add</i>{{item.label}},{{IsExpanded}}</a>
                <div *ngIf="IsExpanded">
                <ul *ngIf="item.subs">
                        <div *ngFor="#subitem of item.subs">
                                <node [item]="subitem"></node>
                        </div>
                </ul>
                </div>
        </li>
        `
})

class Node {
	@Input() item;
  IsExpanded: boolean = false;
	
	toggle() {
   this.IsExpanded = !this.IsExpanded;
   console.log(this.IsExpanded+" " + this.item.label);
   
  }
    ngOnInit() {
	    console.log(this.item); // here it prints the actual value
	  }
}


@Component({
	selector: 'ng-tree',
	directives: [CORE_DIRECTIVES, Node],
	template: `
        <ul>
                <div *ngFor="#item of data">
                        <node [item]="item"></node>
                </div>
        </ul>
        `
})

export class NgTree{
    @Input() data: [];

    ngOnInit() {
	    console.log(this.data); // here it prints the actual value
    }
}