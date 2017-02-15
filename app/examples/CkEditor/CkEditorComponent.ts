import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from 'angular2/common'

import {NgCkEditor} from "app/components/CkEditor/NgCkEditor"

@Component({
    template: `<div class="panel panel-default">
        <div class="panel-heading">
            <span class="lead"> CkEditor </span><br>
           </div>
            <ng-ckeditor></ng-ckeditor>
            </div>`,
    directives: [CORE_DIRECTIVES,NgCkEditor]
})

export class CkEditorComponent { }
