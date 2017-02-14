System.register(["angular2/core", "app/components/form/NgItemSelector", 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, NgItemSelector_1, common_1;
    var ItemSelectorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NgItemSelector_1_1) {
                NgItemSelector_1 = NgItemSelector_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ItemSelectorComponent = (function () {
                function ItemSelectorComponent() {
                    this.selectedData = [{
                            body: 'First',
                            id: 1,
                            type: 'default',
                            disable: false
                        },
                        {
                            body: 'Eight',
                            id: 8,
                            type: 'default',
                            disable: false
                        }, {
                            body: 'Nine',
                            id: 9,
                            type: 'default',
                            disable: false
                        },
                        {
                            body: 'Ten',
                            id: 10,
                            type: 'default',
                            disable: false
                        }];
                    this.listData = [
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
                ItemSelectorComponent = __decorate([
                    core_1.Component({
                        template: "\n\t  <h1>Item Selector</h1>\n\t  <hr/>\n\t<ng-itemselector \n\t[data]=\"listData\"\n\t[selectedData]=\"selectedData\"  >\n\t</ng-itemselector>\n\t",
                        directives: [common_1.CORE_DIRECTIVES, NgItemSelector_1.NgItemSelector]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemSelectorComponent);
                return ItemSelectorComponent;
            }());
            exports_1("ItemSelectorComponent", ItemSelectorComponent);
        }
    }
});
//# sourceMappingURL=ItemSelectorComponent.js.map