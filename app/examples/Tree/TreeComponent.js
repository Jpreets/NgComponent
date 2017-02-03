System.register(["angular2/core", "app/components/tree/NgTree", 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, NgTree_1, common_1;
    var TreeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NgTree_1_1) {
                NgTree_1 = NgTree_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            TreeComponent = (function () {
                function TreeComponent() {
                    this.tree_data = [
                        {
                            label: 'a1',
                            id: 1,
                            expandable: true,
                            checked: false,
                            subs: [
                                {
                                    label: 'a11',
                                    id: 1.1,
                                    expandable: false,
                                    checked: false,
                                    subs: [
                                        {
                                            label: 'a111',
                                            id: 1.11,
                                            expandable: false,
                                            checked: false,
                                            subs: [
                                                {
                                                    label: 'a1111',
                                                    id: 1.111,
                                                    expandable: false,
                                                    checked: true
                                                },
                                                {
                                                    label: 'a1112',
                                                    id: 1.112,
                                                    expandable: false,
                                                    checked: false
                                                }
                                            ]
                                        },
                                        {
                                            label: 'a112',
                                            id: 1.12,
                                            expandable: false,
                                            checked: false
                                        }
                                    ]
                                },
                                {
                                    label: 'a12',
                                    id: 1.2,
                                    expandable: true,
                                    checked: false
                                }
                            ]
                        },
                        {
                            label: 'b1',
                            id: 2,
                            expandable: false,
                            checked: true,
                            subs: [
                                {
                                    label: 'b11',
                                    id: 2.1,
                                    expandable: false,
                                    checked: true
                                },
                                {
                                    label: 'b12',
                                    id: 2.2,
                                    expandable: false,
                                    checked: true
                                }
                            ]
                        }
                    ];
                    this.expand_items = [];
                    this.checked_items = [];
                }
                TreeComponent = __decorate([
                    core_1.Component({
                        template: "<ng-tree [data]=\"tree_data\" [expandItems]=\"expand_items\" [checkedItems]=\"checked_items\"></ng-tree>",
                        directives: [common_1.CORE_DIRECTIVES, NgTree_1.NgTree]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TreeComponent);
                return TreeComponent;
            }());
            exports_1("TreeComponent", TreeComponent);
        }
    }
});
//# sourceMappingURL=TreeComponent.js.map