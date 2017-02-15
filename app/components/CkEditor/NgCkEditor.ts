import {Component, Input} from "angular2/core";
import {CORE_DIRECTIVES} from 'angular2/common';


@Component({
    selector: 'ng-ckeditor'
    template: `
        <textarea name="editor1" id="editor1" rows="10" cols="80" [(ngModel)]="content">
            <p>Hello <strong>world</strong></p>
        </textarea>
        <div [innerHTML]="content"></div>
    `,
})

export class NgCkEditor{

    constructor(){}
    ngOnInit(){
       this.content = '<p>Hello <strong>World !</strong></p>';
       window['CKEDITOR']['replace']( 'editor1' );
    }

}  
    
