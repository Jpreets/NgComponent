import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from 'angular2/common'

import {NgFileUpload} from "app/components/FileUpload/NgFileUpload"

@Component({
    template: `
            <h1>File Upload</h1>
            <hr/>
            <form>
                <ng-fileupload [activeColor]="'orangered'" [baseColor]="'lightgray'"></ng-fileupload>
            </form>
            `,
    directives: [CORE_DIRECTIVES,NgFileUpload]
})

export class FileUploadComponent { }
