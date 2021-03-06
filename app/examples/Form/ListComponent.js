System.register(["angular2/core", "app/components/form/NgList", 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, NgList_1, common_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NgList_1_1) {
                NgList_1 = NgList_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.selectable = true;
                    this.multiselect = true;
                    this.listData = [{
                            body: 'First',
                            id: 1,
                            type: 'default',
                            disable: false
                        },
                        {
                            body: 'Second',
                            id: 2,
                            type: 'success',
                            disable: false
                        },
                        {
                            body: 'Third',
                            id: 3,
                            type: 'info',
                            disable: false
                        },
                        {
                            body: 'Fourth',
                            id: 4,
                            type: 'warning',
                            disable: false
                        },
                        {
                            body: 'Five',
                            id: 5,
                            type: 'danger',
                            disable: false
                        },
                        {
                            body: 'Six',
                            id: 7,
                            type: 'default',
                            disable: true
                        }
                    ];
                }
                ListComponent = __decorate([
                    core_1.Component({
                        template: "\n\t<h1>List</h1>\n\t  <hr/>\n\t  <ng-list [data]=\"listData\" \n\t\t\t\t[multiselect]=\"multiselect\"\n                                    [selectable]=\"selectable\">\n\t\t\t  </ng-list>",
                        directives: [common_1.CORE_DIRECTIVES, NgList_1.NgList]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=ListComponent.js.map