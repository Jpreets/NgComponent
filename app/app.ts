
import {bootstrap} from 'angular2/platform/browser';
import { Component, ContentChildren,
   QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit,provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy,RouteConfig} from 'angular2/router';


import {BandComponent} from  "app/examples/band/BandComponent";
import {TabComponent} from   "app/examples/tab/TabComponent";
import {GridComponent} from  "app/examples/grid/GridComponent";
import {PopupComponent} from "app/examples/popup/PopupComponent";
import {FormComponent} from "app/examples/Form/FormComponent";
import {TreeComponent} from "app/examples/Tree/TreeComponent";
import {PanelComponent} from  "app/examples/band/PanelComponent";
import {ListComponent} from  "app/examples/Form/ListComponent";
import {ItemSelectorComponent} from  "app/examples/Form/ItemSelectorComponent";
import {CheckBoxComponent} from  "app/examples/CheckBox/CheckBoxComponent";
import {RadioButtonsComponent} from  "app/examples/RadioButtons/RadioButtonsComponent";
import {CkEditorComponent} from  "app/examples/CkEditor/CkEditorComponent";


// Root Component
@Component({
    selector: 'my-app',
    templateUrl:'app/htmls/main.html',
    directives: [ ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',        component: BandComponent, as: 'Home'},
    {path: '/BandComponent',        component: BandComponent, as: 'BandComponent'},
    {path: '/TabComponent', component: TabComponent, as: 'TabComponent'  },
    {path: '/PopupComponent', component: PopupComponent, as: 'PopupComponent'  },
    {path: '/GridComponent', component: GridComponent, as: 'GridComponent'  },
    {path: '/FormComponent', component: FormComponent, as: 'FormComponent'  },
    {path: '/TreeComponent', component: TreeComponent, as: 'TreeComponent'  },
    {path: '/PanelComponent', component: PanelComponent, as: 'PanelComponent'  },
    {path: '/ListComponent', component: ListComponent, as: 'ListComponent'  },
    {path: '/CheckBoxComponent', component: CheckBoxComponent, as: 'CheckBoxComponent'  },
    {path: '/RadioButtonsComponent', component: RadioButtonsComponent, as: 'RadioButtonsComponent'  },
    {path: '/ItemSelectorComponent', component: ItemSelectorComponent, as: 'ItemSelectorComponent'  },
    {path: '/CkEditorComponent', component: CkEditorComponent, as: 'CkEditorComponent'  },

])

class RootComponent{
}


bootstrap(RootComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));

