
import {bootstrap} from 'angular2/platform/browser';
import { Component, ContentChildren,
   QueryList, AfterContentInit, Input ,Output,EventEmitter,
  View,DynamicComponentLoader,ElementRef,Inject,OnInit,provide} from 'angular2/core';
import {CORE_DIRECTIVES,NgForm} from 'angular2/common';
import {ROUTER_PROVIDERS,ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy,RouteConfig} from 'angular2/router';
import {NgPopup} from "app/components/popup/NgPopup" ;
import { URLSearchParams,HttpModule ,HTTP_PROVIDERS ,Http, Response,Headers, RequestOptions  } from "angular2/http"
import 'rxjs/add/operator/map';

import {BandComponent} from  "app/examples/band/BandComponent";
import {EmailConfigComponent} from   "app/examples/EmailServerConfig/EmailConfigComponent";
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
import {FileUploadComponent} from  "app/examples/FileUpload/FileUploadComponent";


// Root Component
@Component({
    selector: 'my-app',
    templateUrl:'app/htmls/main.html',
    directives: [ ROUTER_DIRECTIVES,NgPopup],
    providers: [HTTP_PROVIDERS]
})
@RouteConfig([
    {path: '/',        component: BandComponent, as: 'Home'},
    {path: '/BandComponent',        component: BandComponent, as: 'BandComponent'},
    {path: '/EmailConfigComponent', component: EmailConfigComponent, as: 'EmailConfigComponent'  },
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
    {path: '/FileUploadComponent', component: FileUploadComponent, as: 'FileUploadComponent'  },

])

class RootComponent{

    public title = 'My Popup'

    public dialogActive ={bool : false};
    
    public  email: string;
    public  password: string;

    constructor (
        private http: Http
    ) {}

    login(){
        let data = new URLSearchParams();
        data.append('email', this.email);
        data.append('password', this.password);
        data.append('rememberMe','on');
        var headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        this.http
          .post('http://localhost:8084/EmailChimp/checkLogin', data, {
      headers: headers
    })
            .subscribe(data => {
                  alert('ok');
            }, error => {
                console.log(error.json());
            });
    }
    
    showPopup(){
       this.dialogActive.bool =true;
     }

     closePopup(){
       this.dialogActive.bool =false;
     }
}


bootstrap(RootComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]).catch(err => console.error(err));

