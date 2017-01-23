
import {bootstrap} from 'angular2/platform/browser';
import {Component, ContentChildren, QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit,provide} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy,RouteConfig} from 'angular2/router';


import {BandComponent} from  "app/examples/band/BandComponent";
import {TabComponent} from   "app/examples/tab/TabComponent";
import {GridComponent} from  "app/examples/grid/GridComponent";
import {PopupComponent} from "app/examples/popup/PopupComponent";
import {FormComponent} from "app/examples/Form/FormComponent";



// Root Component
@Component({
    selector: 'my-app',
    templateUrl:'app/htmls/main.html',
    directives: [ ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/',        component: BandComponent, as: 'Home'},
    {path: '/TabComponent', component: TabComponent, as: 'TabComponent'  },
    {path: '/PopupComponent', component: PopupComponent, as: 'PopupComponent'  },
    {path: '/GridComponent', component: GridComponent, as: 'GridComponent'  },
    {path: '/FormComponent', component: FormComponent, as: 'FormComponent'  }
])

class RootComponent{
}


bootstrap(RootComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));

