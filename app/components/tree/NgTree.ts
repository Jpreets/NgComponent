import {Pipe,PipeTransform,Component,Input,NgSwitch,NgSwitchWhen,NgSwitchDefault,NgModule} from "angular2/core"

@Pipe({name: 'keys'})
class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    console.log(keys);
    return keys;
  }
}

@Component({
    selector:'ng-tree',
    template:`
        <ul>
            <li *ngFor="#entry of data | keys">Key: {{entry.key}}, value: {{entry.value.name}}
               <ul> <li *ngFor="#temp of entry.value.child">value: {{temp.name}}</li>
                </ul>
            </li>
            
        </ul>
    `,
    pipes:[KeysPipe]
})

export class NgTree {

    @Input() data:[];
}
