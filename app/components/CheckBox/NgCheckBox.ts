import {Component, Input, ,Output, EventEmitter} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'ng-checkbox'
    template: `
            <h3>{{name}}</h3>
            <div *ngFor='#key of data'>
             <i [ngClass]="checkValue(key) ?'fa fa-check-square-o' : 'fa fa-square-o'"
                   style="font-size:20px"
                   (click)="checkData(key)"
                   aria-hidden="true"></i>{{key.value}}
               <br><br>
           </div>
    `,
})

export class NgCheckBox{   
    
    @Input() data:[];
    @Input() name;
    @Input() value:[];
    @Output() valueCheckChange = new EventEmitter();
    public emitCheckData= []; 
        
    checkData(key){
        flag = 0;
        for(var i=0;i<this.value.length;i++){
            if(key.id == this.value[i]){
                this.value.splice(this.value.indexOf(key.id), 1);
                flag = 1;
            }
        }
        if(flag == 0)
            this.value.push(key.id);
        for(var i=0;i<this.data.length;i++){
            for(var j=0;j<this.value.length;j++){
                if(this.value[j] == this.data[i].id){
                    this.emitCheckData.push(this.data[i].value);
                }
            }
        }
        this.valueCheckChange.emit(this.emitCheckData);
        this.emitCheckData= [];
    }
    
    checkValue(key){
        for(var i=0;i<this.value.length;i++){
            if(key.id==this.value[i]){
                return true;
            }
        }
        return false;
    }

    ngOnInit(){
        console.log(this.data);
    }

}