import {Component, Input} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
    selector: 'ng-radiobuttons'
    template: `
            <h3>{{name}}</h3>
            <div *ngFor='#key of data'>
             <i [ngClass]="key.id==value ?'fa fa-check-circle-o' : 'fa fa-circle-o'"
                   style="font-size:20px"
                   (click)="checkData(key)"
                   aria-hidden="true"></i>{{key.value}}
               <br><br>
             </div>
    `,
})

export class NgRadioButtons{   
    
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
