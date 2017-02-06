System.register(['angular2/core', 'angular2/common', 'app/components/tab/NgTab'], function(exports_1, context_1) {
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
    var core_1, common_1, NgTab_1;
    var NgTabs;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (NgTab_1_1) {
                NgTab_1 = NgTab_1_1;
            }],
        execute: function() {
            NgTabs = (function () {
                function NgTabs() {
                }
                // contentChildren are set
                NgTabs.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                NgTabs.prototype.selectTab = function (tab) {
                    // deactivate all tabs
                    this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
                    // activate the tab the user has clicked on.
                    tab.active = true;
                };
                __decorate([
                    core_1.ContentChildren(NgTab_1.NgTab), 
                    __metadata('design:type', core_1.QueryList)
                ], NgTabs.prototype, "tabs", void 0);
                NgTabs = __decorate([
                    core_1.Component({
                        selector: 'ng-tabs',
                        template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"#tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n         <a >{{tab.title}}</a>\n       </li>\n    </ul>\n        <ng-content></ng-content>\n\n  ",
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgTabs);
                return NgTabs;
            }());
            exports_1("NgTabs", NgTabs);
        }
    }
});
//# sourceMappingURL=NGTabs.js.map