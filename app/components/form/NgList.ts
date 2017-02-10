
import {Component,Input,Output,EventEmitter} from "angular2/core"

@Component({
    selector:'ng-list',
    template:`
    <div class="list-group">
      <div 
        *ngFor="#rec of data" 
                (click)="selectRow(rec)"
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
    @Input() multiselect = false;
    @Input() selectable=false;
    public selectedRecord=[] ;

    @Output() onSelectionChange = new EventEmitter();
        
        checkRecord(rec){
            for(var i=0;i<this.selectedRecord.length;i++){
                if(rec.id == this.selectedRecord[i].id){ 
                    return true;
                }
            }
            return false;
        }

     selectRow(record) {
        if(!this.selectable) return;
                flag = 0;
                for(var i=0;i<this.selectedRecord.length;i++){
                    if(record.id == this.selectedRecord[i].id){
                        this.selectedRecord.splice(this.selectedRecord.indexOf(record), 1);
                        flag = 1;
                    }
                }
                if(flag == 0)
                    this.selectedRecord.push(record);

                this.onSelectionChange.emit(this.selectedRecord);

  }

}
