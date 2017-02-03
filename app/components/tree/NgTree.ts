import {Output,EventEmitter,Pipe,PipeTransform,Component,Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule} from "angular2/core"
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
            <span *ngIf="item.checked"><input type="checkbox" (click)="checkData()" checked></span>
            <span *ngIf="!item.checked"><input type="checkbox" (click)="checkData()"></span>
            <a *ngIf="!item.expandable" class ="iconButton" (click)="toggle()"> <i class="material-icons">play_arrow</i>{{item.label}},{{item.expandable}}-{{depth}}</a>
            <a *ngIf="item.expandable" class ="iconButton" (click)="toggle()"> <i class="material-icons">arrow_drop_down</i>{{item.label}},{{item.expandable}}-{{depth}}</a>
        </li>   
        <div *ngIf="(item.subs && item.expandable)" >
                <div *ngFor="#subitem of item.subs">
                      <node [item]="subitem" [depth] = "depth+1" (dataUpdated)="handleDataUpdated($event)"></node>
                </div>
        </div>
        
        `,
  pipes:[DemoNumber]
})

class Node {
	@Input() item;
  IsExpanded: boolean = false;
  @Input() depth: int 0;

  @Output() dataUpdated = new EventEmitter();

  checkData(){
    this.item.checked = !this.item.checked;
    this.dataUpdated.emit(this.item);
  }

  createRange(number){
    console.log("Hi"+number);
    this.items = [];
    for(var i = 1; i <= number; i++){
       this.items.push(i);
    }
    return this.items;
  }
	
  handleDataUpdated(item) {
      this.dataUpdated.emit(item);
  }

	toggle() {
   this.item.expandable = !this.item.expandable;
   this.dataUpdated.emit(this.item);
   
  }
    ngOnInit() {
	  }
}


@Component({
	selector: 'ng-tree',
	directives: [CORE_DIRECTIVES, Node],
	template: `
        
        <div class="container">
            <ul>
                    <div *ngFor="#item of data">
                            <node [item]="item" (dataUpdated)="handleDataUpdated($event)"></node><br>
                    </div>
            </ul>
        </div>
        `
})

export class NgTree{
    @Input() data: [];
    @Input() expandItems: [];
    @Input() checkedItems: [];
    tmp_item: Object;

    handleDataUpdated(item) {
      this.tmp_item = item;
      console.log(this.tmp_item);

      if(this.tmp_item.checked){
        var flag = 0;
        for(var i=0;i<this.checkedItems.length;i++){
          items = this.checkedItems[i];
          if(items.id == item.id){
            flag = 1;
            break;
          }
        }
        if(flag == 0){
          this.checkedItems.push(item);
        }
        console.log(this.checkedItems);
      }else {
        this.checkedItems.splice(this.checkedItems.indexOf(item), 1);
      }
      if(item.expandable){
        this.expandItems.push(item);
        console.log(this.expandItems);
      }else{
        this.expandItems.splice(this.expandItems.indexOf(item), 1);
        console.log(this.expandItems);
      }
    }
}