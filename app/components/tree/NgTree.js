System.register(["angular2/core", "angular2/common"], function(exports_1, context_1) {
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
    var core_1, common_1;
    var DemoNumber, Node, NgTree;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DemoNumber = (function () {
                function DemoNumber() {
                }
                DemoNumber.prototype.transform = function (value, args) {
                    var res = [];
                    for (var i = 0; i < value; i++) {
                        res.push(i);
                    }
                    return res;
                };
                DemoNumber = __decorate([
                    core_1.Pipe({ name: 'demoNumber' }), 
                    __metadata('design:paramtypes', [])
                ], DemoNumber);
                return DemoNumber;
            }());
            exports_1("DemoNumber", DemoNumber);
            Node = (function () {
                function Node() {
                    this.IsExpanded = false;
                    this.depth = 0;
                    this.dataUpdated = new core_1.EventEmitter();
                    this.selectedItem = {};
                }
                Node.prototype.checkData = function () {
                    this.item.checked = !this.item.checked;
                    this.dataUpdated.emit(this.item);
                };
                Node.prototype.selectRow = function (record) {
                    this.selectedItem = record;
                };
                Node.prototype.createRange = function (number) {
                    console.log("Hi" + number);
                    this.items = [];
                    for (var i = 1; i <= number; i++) {
                        this.items.push(i);
                    }
                    return this.items;
                };
                Node.prototype.handleDataUpdated = function (item) {
                    this.dataUpdated.emit(item);
                };
                Node.prototype.toggle = function () {
                    this.item.expandable = !this.item.expandable;
                    this.dataUpdated.emit(this.item);
                };
                Node.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Node.prototype, "item", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Node.prototype, "depth", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Node.prototype, "dataUpdated", void 0);
                Node = __decorate([
                    core_1.Component({
                        selector: 'node',
                        directives: [common_1.CORE_DIRECTIVES, Node],
                        template: "\n        <li class=\"list-group-item\" (click)=\"selectRow(item)\" \n            [ngClass]=\"{selected: item.id === selectedItem.id}\">\n            <span *ngFor='#key of depth | demoNumber'>&nbsp;&nbsp;&nbsp;&nbsp;</span>\n            <span *ngIf=\"item.checked\"><input type=\"checkbox\" (click)=\"checkData()\" checked></span>\n            <span *ngIf=\"!item.checked\"><input type=\"checkbox\" (click)=\"checkData()\"></span>\n            <a *ngIf=\"!item.expandable\" class =\"iconButton\" (click)=\"toggle()\"> <i class=\"material-icons\">play_arrow</i>{{item.label}},{{item.expandable}}-{{depth}}</a>\n            <a *ngIf=\"item.expandable\" class =\"iconButton\" (click)=\"toggle()\"> <i class=\"material-icons\" style=\"font-size: 35px;margin-top:10px;\">arrow_drop_down</i>{{item.label}},{{item.expandable}}-{{depth}}</a>\n        </li>   \n        <div *ngIf=\"(item.subs && item.expandable)\" >\n                <div *ngFor=\"#subitem of item.subs\">\n                      <node [item]=\"subitem\" [depth] = \"depth+1\" (dataUpdated)=\"handleDataUpdated($event)\"></node>\n                </div>\n        </div>\n        \n        ",
                        pipes: [DemoNumber]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Node);
                return Node;
            }());
            NgTree = (function () {
                function NgTree() {
                }
                NgTree.prototype.handleDataUpdated = function (item) {
                    this.tmp_item = item;
                    console.log(this.tmp_item);
                    if (this.tmp_item.checked) {
                        var flag = 0;
                        for (var i = 0; i < this.checkedItems.length; i++) {
                            items = this.checkedItems[i];
                            if (items.id == item.id) {
                                flag = 1;
                                break;
                            }
                        }
                        if (flag == 0) {
                            this.checkedItems.push(item);
                        }
                        console.log(this.checkedItems);
                    }
                    else {
                        this.checkedItems.splice(this.checkedItems.indexOf(item), 1);
                    }
                    if (item.expandable) {
                        this.expandItems.push(item);
                        console.log(this.expandItems);
                    }
                    else {
                        this.expandItems.splice(this.expandItems.indexOf(item), 1);
                        console.log(this.expandItems);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgTree.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgTree.prototype, "expandItems", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgTree.prototype, "checkedItems", void 0);
                NgTree = __decorate([
                    core_1.Component({
                        selector: 'ng-tree',
                        directives: [common_1.CORE_DIRECTIVES, Node],
                        template: "\n        \n        <div class=\"container\">\n        <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <span class=\"lead\"> Tree View </span><br>\n        </div>\n        </div>\n            <ul>\n                    <div *ngFor=\"#item of data\">\n                            <node [item]=\"item\" (dataUpdated)=\"handleDataUpdated($event)\"></node>\n                    </div>\n            </ul>\n        </div>\n        "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgTree);
                return NgTree;
            }());
            exports_1("NgTree", NgTree);
        }
    }
});
//# sourceMappingURL=NgTree.js.map