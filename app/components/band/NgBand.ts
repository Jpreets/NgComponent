import {bootstrap} from 'angular2/platform/browser';
import {Component,Input, Output,provide} from 'angular2/core';

@Component({
  selector: `ng-band`,
  template: `<div class="col-sm-4" >
                <div class="thumbnail"> 
                        <ng-content></ng-content>

                </div>
             </div>`
})
export class NgBand {
 
}