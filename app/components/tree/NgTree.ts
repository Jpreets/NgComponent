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
            <li *ngFor="#dir of data">
               <span><input type="checkbox" [checked]="checked" (click)="check()"/></span> 
               <span (click)="toggle()">{{ dir.name }}</span> 
               <div *ngIf="expanded"> 
                    <ul > 
                        <li *ngFor="#file of dir.child">{{file.name}}</li> 
                    </ul> 
                    <ng-tree [data]="tree_data"></ng-tree>
                </div>
            </li>
            
        </ul>
    `,
    pipes:[KeysPipe]
})

export class NgTree {

    @Input() data:[];
    name: string; 
    expanded:boolean;
    checked:boolean;

    constructor() { 
        this.expanded = false; 
        this.checked = false; 
    }

    toggle(){ 
        console.log(this.expanded);
        this.expanded = !this.expanded; 
    } 
    check(){
        let newState = !this.checked; 
        this.checked = newState; 
        this.checkRecursive(newState); 
    } 
    checkRecursive(state){ 
        this.data.forEach(d => {
             this.checked = state; 
             this.checkRecursive(state); 
        }) 
    }
}
