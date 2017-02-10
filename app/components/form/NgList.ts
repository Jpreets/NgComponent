
import {Component,Input,Output,EventEmitter} from "angular2/core"

@Component({
	selector:'ng-list',
	template:`
	<div class="list-group">
  	  <div 
		*ngFor="#rec of data" 
		[ngClass]="rec.disable?
		'list-group-item list-group-item-'+rec.type+' disabled':
		'list-group-item list-group-item-'+rec.type +' '+(rec.id==selectedRecord.id?'selected':'') "
		[innerHTML]="rec.body"
		 (click)="selectRow(rec)" 
		 ></div>
	  </div>
	`
})
export class NgList{ 

	@Input() data=[];
	@Input() multiselect = false;
	@Input() selectable=false;
	public selectedRecord={id:0} ;

  	@Output() onSelectionChange = new EventEmitter();

 	 selectRow(record) {
		if(!this.selectable) return;
    
		this.selectedRecord= record;
     	this.onSelectionChange.emit(this.selectedRecord);

  }

}
