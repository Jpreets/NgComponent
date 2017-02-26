System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', "app/components/popup/NgPopup", "angular2/http", 'rxjs/add/operator/map', "app/examples/band/BandComponent", "app/examples/EmailServerConfig/EmailConfigComponent", "app/examples/grid/GridComponent", "app/examples/popup/PopupComponent", "app/examples/Form/FormComponent", "app/examples/Tree/TreeComponent", "app/examples/band/PanelComponent", "app/examples/Form/ListComponent", "app/examples/Form/ItemSelectorComponent", "app/examples/CheckBox/CheckBoxComponent", "app/examples/RadioButtons/RadioButtonsComponent", "app/examples/CkEditor/CkEditorComponent", "app/examples/FileUpload/FileUploadComponent"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, router_1, NgPopup_1, http_1, BandComponent_1, EmailConfigComponent_1, GridComponent_1, PopupComponent_1, FormComponent_1, TreeComponent_1, PanelComponent_1, ListComponent_1, ItemSelectorComponent_1, CheckBoxComponent_1, RadioButtonsComponent_1, CkEditorComponent_1, FileUploadComponent_1;
    var RootComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (NgPopup_1_1) {
                NgPopup_1 = NgPopup_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (BandComponent_1_1) {
                BandComponent_1 = BandComponent_1_1;
            },
            function (EmailConfigComponent_1_1) {
                EmailConfigComponent_1 = EmailConfigComponent_1_1;
            },
            function (GridComponent_1_1) {
                GridComponent_1 = GridComponent_1_1;
            },
            function (PopupComponent_1_1) {
                PopupComponent_1 = PopupComponent_1_1;
            },
            function (FormComponent_1_1) {
                FormComponent_1 = FormComponent_1_1;
            },
            function (TreeComponent_1_1) {
                TreeComponent_1 = TreeComponent_1_1;
            },
            function (PanelComponent_1_1) {
                PanelComponent_1 = PanelComponent_1_1;
            },
            function (ListComponent_1_1) {
                ListComponent_1 = ListComponent_1_1;
            },
            function (ItemSelectorComponent_1_1) {
                ItemSelectorComponent_1 = ItemSelectorComponent_1_1;
            },
            function (CheckBoxComponent_1_1) {
                CheckBoxComponent_1 = CheckBoxComponent_1_1;
            },
            function (RadioButtonsComponent_1_1) {
                RadioButtonsComponent_1 = RadioButtonsComponent_1_1;
            },
            function (CkEditorComponent_1_1) {
                CkEditorComponent_1 = CkEditorComponent_1_1;
            },
            function (FileUploadComponent_1_1) {
                FileUploadComponent_1 = FileUploadComponent_1_1;
            }],
        execute: function() {
            // Root Component
            RootComponent = (function () {
                function RootComponent(http) {
                    this.http = http;
                    this.title = 'My Popup';
                    this.dialogActive = { bool: false };
                }
                RootComponent.prototype.login = function () {
                    var data = new http_1.URLSearchParams();
                    data.append('email', this.email);
                    data.append('password', this.password);
                    data.append('rememberMe', 'on');
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/x-www-form-urlencoded");
                    this.http
                        .post('http://localhost:8084/EmailChimp/checkLogin', data, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        alert('ok');
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                RootComponent.prototype.showPopup = function () {
                    this.dialogActive.bool = true;
                };
                RootComponent.prototype.closePopup = function () {
                    this.dialogActive.bool = false;
                };
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/htmls/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES, NgPopup_1.NgPopup],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: BandComponent_1.BandComponent, as: 'Home' },
                        { path: '/BandComponent', component: BandComponent_1.BandComponent, as: 'BandComponent' },
                        { path: '/EmailConfigComponent', component: EmailConfigComponent_1.EmailConfigComponent, as: 'EmailConfigComponent' },
                        { path: '/PopupComponent', component: PopupComponent_1.PopupComponent, as: 'PopupComponent' },
                        { path: '/GridComponent', component: GridComponent_1.GridComponent, as: 'GridComponent' },
                        { path: '/FormComponent', component: FormComponent_1.FormComponent, as: 'FormComponent' },
                        { path: '/TreeComponent', component: TreeComponent_1.TreeComponent, as: 'TreeComponent' },
                        { path: '/PanelComponent', component: PanelComponent_1.PanelComponent, as: 'PanelComponent' },
                        { path: '/ListComponent', component: ListComponent_1.ListComponent, as: 'ListComponent' },
                        { path: '/CheckBoxComponent', component: CheckBoxComponent_1.CheckBoxComponent, as: 'CheckBoxComponent' },
                        { path: '/RadioButtonsComponent', component: RadioButtonsComponent_1.RadioButtonsComponent, as: 'RadioButtonsComponent' },
                        { path: '/ItemSelectorComponent', component: ItemSelectorComponent_1.ItemSelectorComponent, as: 'ItemSelectorComponent' },
                        { path: '/CkEditorComponent', component: CkEditorComponent_1.CkEditorComponent, as: 'CkEditorComponent' },
                        { path: '/FileUploadComponent', component: FileUploadComponent_1.FileUploadComponent, as: 'FileUploadComponent' },
                    ]), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RootComponent);
                return RootComponent;
            }());
            browser_1.bootstrap(RootComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=app.js.map