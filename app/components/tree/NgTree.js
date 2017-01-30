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
                }
                Node.prototype.createRange = function (number) {
                    console.log("Hi" + number);
                    this.items = [];
                    for (var i = 1; i <= number; i++) {
                        this.items.push(i);
                    }
                    return this.items;
                };
                Node.prototype.toggle = function () {
                    this.IsExpanded = !this.IsExpanded;
                    console.log(this.IsExpanded + " " + this.item.label);
                };
                Node.prototype.ngOnInit = function () {
                    console.log(this.item); // here it prints the actual value
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Node.prototype, "item", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Node.prototype, "depth", void 0);
                Node = __decorate([
                    core_1.Component({
                        selector: 'node',
                        directives: [common_1.CORE_DIRECTIVES, Node],
                        template: "\n        <li class=\"list-group-item\">\n            <span *ngFor='#key of depth | demoNumber'>--</span>\n            <input type=\"checkbox\">\n            <a *ngIf=\"!IsExpanded\" class =\"iconButton\" (click)=\"toggle()\"> <i class=\"material-icons\">play_arrow</i>{{item.label}},{{IsExpanded}}-{{depth}}</a>\n            <a *ngIf=\"IsExpanded\" class =\"iconButton\" (click)=\"toggle()\"> <i class=\"material-icons\">arrow_drop_down</i>{{item.label}},{{IsExpanded}}-{{depth}}</a>\n        </li>   \n        <div *ngIf=\"item.subs && IsExpanded\" >\n                <div *ngFor=\"#subitem of item.subs\">\n                      <node [item]=\"subitem\" [depth] = \"depth+1\"></node>\n                </div>\n        </div>\n        \n        ",
                        pipes: [DemoNumber]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Node);
                return Node;
            }());
            NgTree = (function () {
                function NgTree() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgTree.prototype, "data", void 0);
                NgTree = __decorate([
                    core_1.Component({
                        selector: 'ng-tree',
                        directives: [common_1.CORE_DIRECTIVES, Node],
                        template: "\n        \n        <div class=\"container\">\n            <ul>\n                    <div *ngFor=\"#item of data\">\n                            <node [item]=\"item\"></node><br>\n                    </div>\n            </ul>\n        </div>\n        "
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