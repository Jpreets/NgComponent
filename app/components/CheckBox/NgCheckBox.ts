import {Component, Input} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'ng-checkbox'
    template: `
        <div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead"> CheckBox </span><br>
           </div>
            <h3>{{name}}</h3>
            <div *ngFor='#key of data'>
             <i [ngClass]="key.id==value ?'fa fa-check-square-o' : 'fa fa-square-o'"
                   style="font-size:20px"
                   (click)="checkData(key)"
                   aria-hidden="true">{{key.value}}</i>
               <br><br>
            </div>
         </div>
    `,
})

export class NgCheckBox{   
    
    @Input() data:[];
    @Input() name;
    @Input() value;

    checkData(key){
        this.value = key.id; 
    }

    ngOnInit(){
        console.log(this.data);
        console.log(this.name);
        console.log(this.value);
    }

}