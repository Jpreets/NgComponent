import {Pipe,PipeTransform,Component,Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"

@Pipe({name: 'demoNumber'})
export class DemoNumber implements PipeTransform {
  transform(value, args:string[]) : any {
    let res = [];
    for (let i = 0; i < value; i++) {
        res.push(i);
      }
      return res;
  }
}

@Component({
	selector: 'node',
	directives: [CORE_DIRECTIVES, Node],
	template: `
        <li class="list-group-item">
            <span *ngFor='#key of depth | demoNumber'>--</span>
            <input type="checkbox">
            <a *ngIf="!IsExpanded" class ="iconButton" (click)="toggle()"> <i class="material-icons">play_arrow</i>{{item.label}},{{IsExpanded}}-{{depth}}</a>
            <a *ngIf="IsExpanded" class ="iconButton" (click)="toggle()"> <i class="material-icons">arrow_drop_down</i>{{item.label}},{{IsExpanded}}-{{depth}}</a>
        </li>   
        <div *ngIf="item.subs && IsExpanded" >
                <div *ngFor="#subitem of item.subs">
                      <node [item]="subitem" [depth] = "depth+1"></node>
                </div>
        </div>
        
        `,
  pipes:[DemoNumber]
})

class Node {
	@Input() item;
  IsExpanded: boolean = false;
  @Input() depth: int 0;

  createRange(number){
    console.log("Hi"+number);
    this.items = [];
    for(var i = 1; i <= number; i++){
       this.items.push(i);
    }
    return this.items;
  }
	
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
        
        <div class="container">
            <ul>
                    <div *ngFor="#item of data">
                            <node [item]="item"></node><br>
                    </div>
            </ul>
        </div>
        `
})

export class NgTree{
    @Input() data: [];
}