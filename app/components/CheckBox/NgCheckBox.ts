import {Component, Input} from "angular2/core";
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

    checkData(key){
        console.log(this.value);
        flag = 0;
        for(var i=0;i<this.value.length;i++){
            if(key.id == this.value[i]){
                this.value.splice(this.value.indexOf(key.id), 1);
                flag = 1;
            }
        }
        if(flag == 0)
            this.value.push(key.id);
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
        console.log(this.name);
        console.log(this.value);
    }

}