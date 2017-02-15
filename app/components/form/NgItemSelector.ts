
import {Component,Input,Output,EventEmitter, HostListener, Directive, HostBinding} from "angular2/core"


export interface DraggableOptions {
  zone?: string;
  data?: any;
}

@Directive({
  selector: '[myDraggable]'
})
export class DraggableDirective {
  @HostBinding('draggable')
  get draggable() {
    return true;
  }
  
  @Input()
  set myDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  private options: DraggableOptions = {};
  
  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const { zone = 'zone', data = {} } = this.options;
    
    event.dataTransfer.setData(`application/x-${zone}`, JSON.stringify(data));
  }
}


export interface DropTargetOptions {
  zone?: string;
  data?: any;
}

@Directive({
  selector: '[myDropTarget]'
})
export class DropTargetDirective {
  @Input()
  set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  @Output('myDrop') drop = new EventEmitter();
  
  private options: DropTargetOptions = {};
  
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone', data = {} } = this.options;
    
    if (event.dataTransfer.types.indexOf(`application/x-${zone}`) >= 0) {
      event.preventDefault();
    }
  }
  
  @HostListener('drop', ['$event'])
  onDrop(event) {
    const { zone = 'zone' } = this.options;
    
    const data = JSON.parse(event.dataTransfer.getData(`application/x-${zone}`));
    
    this.drop.next(data);
  }
}




@Component({
    selector:'ng-itemselector',
    template:`
 <div class="row">
	  <div class="col-xs-6">

<div class="panel panel-default">
    <div class="list-group" style="height: 300px;overflow-y: auto;"
         [myDropTarget]
        (myDrop)="deSelectRecord($event)"
    >
      <div 
        *ngFor="#rec of data" 
                (dblclick)="selectRecord(rec)"
        [ngClass]="rec.disable?
        'list-group-item list-group-item-'+rec.type+' disabled':
        'list-group-item list-group-item-'+rec.type +' ' "
        [innerHTML]="rec.body" 
        [myDraggable]="{data: rec }"
       
         ></div>
	  </div>
    </div>
</div>
			   <div class="col-xs-6">
<div class="panel panel-default">
         <div class="list-group" style="height: 300px;overflow-y: auto;"
         [myDropTarget]
        (myDrop)="selectRecord($event)"
    >
      <div 
        *ngFor="#rec of selectedData" 
        (dblclick)="deSelectRecord(rec)"
        [ngClass]="rec.disable?
        'list-group-item list-group-item-'+rec.type+' disabled':
        'list-group-item list-group-item-'+rec.type +' ' "
        [innerHTML]="rec.body" 
        [myDraggable]="{data: rec }"
       
         ></div>
      </div>
			   </div>
          </div>
</div>

    `,
    directives: [DropTargetDirective,DraggableDirective]

})
export class NgItemSelector{ 

    @Input() data=[];
    @Input() selectedData =[];
    

    deSelectRecord(rec) {
        if(!this.checkRecord(rec,this.data)){
            this.data.push(rec);
            this.removeRecord(this.selectedData,rec);

        }
    }
    selectRecord(rec) {
        if(!this.checkRecord(rec,this.selectedData)){
            this.selectedData.push(rec);
            this.removeRecord(this.data,rec);
        }
    }


    removeRecord(array, rec){
      for(var i = array.length - 1; i >= 0; i--) {
        if(array[i].id === rec.id) {
           array.splice(i, 1);
        }
      }
    }
        
    checkRecord(rec, list){
            for(var i=0;i<list.length;i++){
                if(rec.id == list[i].id){ 
                    return true;
                }
            }
            return false;
  }

}
