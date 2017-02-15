
import {Component,Input,Output,EventEmitter} from "angular2/core"

@Component({
    selector:'ng-list',
    template:`
    <div class="list-group">
      <div 
        *ngFor="#rec of data" 
                (click)="selectRow(rec,$event)"
        [ngClass]="rec.disable?
        'list-group-item list-group-item-'+rec.type+' disabled':
        'list-group-item list-group-item-'+rec.type +' '+(checkRecord(rec)?'selected':'') "
        [innerHTML]="rec.body" 
         ></div>
      </div>
    `
})
export class NgList{ 

    @Input() data=[];
    @Input() multiselect;
    @Input() selectable=false;
    public selectedRecord=[];
    mouseEvent: MouseEvent;

    @Output() onSelectionChange = new EventEmitter();
        
        checkRecord(rec){
            for(var i=0;i<this.selectedRecord.length;i++){
                if(rec.id == this.selectedRecord[i].id){ 
                    return true;
                }
            }
            return false;
        }

     selectRow(record,event:MouseEvent) {
        this.mouseEvent = event;
        if(!this.selectable) return;
        if(!this.multiselect){
            for(var i=0;i<this.selectedRecord.length;i++){
                rec = this.selectedRecord[i];
                this.selectedRecord.splice(this.selectedRecord.indexOf(rec), 1);
            }
            this.selectedRecord.push(record);
            console.log(this.selectedRecord);
        }else {
            if(this.mouseEvent.type=="click" && event.ctrlKey){
                flag = 0;
                for(var i=0;i<this.selectedRecord.length;i++){
                    if(record.id == this.selectedRecord[i].id){
                        this.selectedRecord.splice(this.selectedRecord.indexOf(record), 1);
                        flag = 1;
                    }
                }
                if(flag == 0)
                    this.selectedRecord.push(record);
            }else if(this.mouseEvent.type=="click" && event.shiftKey){
                if(this.selectedRecord.length == 0)
                    this.selectedRecord.push(record);
                else{
                    index_start = this.selectedRecord[this.selectedRecord.length-1].id;
                    index_end = record.id;
                    if(index_start>index_end){
                        tmp = index_start;
                        index_start = index_end;
                        index_end = tmp;
                    }
                    for(var i=index_start;i<=index_end;i++){
                        this.selectedRecord.push(this.getId(i));
                    }
                }
            }else if(this.mouseEvent.type=="click"){
                this.selectedRecord = [];
                this.selectedRecord.push(record);
                console.log(this.selectedRecord);
            }
        }
        this.onSelectionChange.emit(this.selectedRecord);

    }

    getId(i){
        for(var j=0;j<this.data.length;j++){
            if(this.data[j].id == i)
                return this.data[j];
        }
        return 0;
    }

}
