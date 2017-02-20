import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from 'angular2/common'

import {NgCkEditor} from "app/components/CkEditor/NgCkEditor"

@Component({
    template: `
            <h1>Ck Editor</h1>
            <hr/>
            <ng-ckeditor></ng-ckeditor>
            `,
    directives: [CORE_DIRECTIVES,NgCkEditor]
})

export class CkEditorComponent { }
