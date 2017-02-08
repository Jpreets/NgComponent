import {Output,EventEmitter,Pipe,PipeTransform,Component,
  Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule} from "angular2/core"
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
  styles: [`
    .list-group-item:last-child {
        margin-bottom: -1px;
    }
  `],
	template: `
        <li class="list-group-item" (click)="selectRow(item)" 
         [ngClass]="{selected: item.checked}">
            
          <span *ngFor='#key of depth | demoNumber'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
           
           <i  [ngClass]="item.checked ?'fa fa-check-square-o' : 'fa fa-square-o'"
                   style="font-size:20px" 
                   (click)="checkData()"
                   aria-hidden="true"></i>

            <span (click)="toggle()" style="vertical-align: text-bottom;"> 
                <i  [ngClass]="item.expandable? 'fa fa-play fa-rotate-90' : 'fa fa-play'"
                   style="color:#337ab7;font-size:12px" aria-hidden="true"></i>
                {{item.label}}
            </span>
           
        </li>   
        <div *ngIf="(item.subs && item.expandable)" >
              <node *ngFor="#subitem of item.subs"
                      [item]="subitem" [depth] = "depth+1"
                       (dataUpdated)="handleDataUpdated($event)"></node>
             
        </div>
        
        `,
  pipes:[DemoNumber]
})

class Node {
	@Input() item;
  IsExpanded: boolean = false;
  @Input() depth = 0;

  @Output() dataUpdated = new EventEmitter();

  public selectedItem = {};

  checkData(){
    this.item.checked = !this.item.checked;
    this.dataUpdated.emit(this.item);
  }

  selectRow(record) {
    this.selectedItem= record;
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
        
        <div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead"> Tree View </span><br>
           </div>
            <node  *ngFor="#item of data" [item]="item" (dataUpdated)="handleDataUpdated($event)"></node>
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