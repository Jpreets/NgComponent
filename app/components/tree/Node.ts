import {
	Component, 
	bootstrap,
	Input,
	OnInit
} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"

@Component({
	selector: 'node',
	directives: [CORE_DIRECTIVES, Node],
	template: `
        <li>
                <a class ="iconButton" (click)="toggle()"> <i class="material-icons">add</i>{{item.label}},{{IsExpanded}}</a>
                <div *ngIf="IsExpanded">
                <ul *ngIf="item.subs">
                        <template *ngFor="#subitem of item.subs">
                                <node [item]="subitem"></node>
                        </template>
                </ul>
                </div>
        </li>
        `
})
export class Node implements OnInit {
	@Input() item: any;
  IsExpanded: boolean = false;
        constructor(){
            console.log(this.item);
        }
	onInit() {
		console.log(this.item);
	}
	toggle() {
   this.IsExpanded = !this.IsExpanded;
   console.log(this.IsExpanded+" " + this.item.label);
   
  }
}

