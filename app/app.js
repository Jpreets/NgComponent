System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', "app/examples/band/BandComponent", "app/examples/tab/TabComponent", "app/examples/grid/GridComponent", "app/examples/popup/PopupComponent", "app/examples/Form/FormComponent", "app/examples/Tree/TreeComponent", "app/examples/band/PanelComponent", "app/examples/Form/ListComponent"], function(exports_1, context_1) {
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
    var browser_1, core_1, router_1, BandComponent_1, TabComponent_1, GridComponent_1, PopupComponent_1, FormComponent_1, TreeComponent_1, PanelComponent_1, ListComponent_1;
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
            function (BandComponent_1_1) {
                BandComponent_1 = BandComponent_1_1;
            },
            function (TabComponent_1_1) {
                TabComponent_1 = TabComponent_1_1;
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
            }],
        execute: function() {
            // Root Component
            RootComponent = (function () {
                function RootComponent() {
                }
                RootComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/htmls/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: BandComponent_1.BandComponent, as: 'Home' },
                        { path: '/BandComponent', component: BandComponent_1.BandComponent, as: 'BandComponent' },
                        { path: '/TabComponent', component: TabComponent_1.TabComponent, as: 'TabComponent' },
                        { path: '/PopupComponent', component: PopupComponent_1.PopupComponent, as: 'PopupComponent' },
                        { path: '/GridComponent', component: GridComponent_1.GridComponent, as: 'GridComponent' },
                        { path: '/FormComponent', component: FormComponent_1.FormComponent, as: 'FormComponent' },
                        { path: '/TreeComponent', component: TreeComponent_1.TreeComponent, as: 'TreeComponent' },
                        { path: '/PanelComponent', component: PanelComponent_1.PanelComponent, as: 'PanelComponent' },
                        { path: '/ListComponent', component: ListComponent_1.ListComponent, as: 'ListComponent' },
                    ]), 
                    __metadata('design:paramtypes', [])
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