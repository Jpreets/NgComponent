System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var KeysPipe, NgTree;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KeysPipe = (function () {
                function KeysPipe() {
                }
                KeysPipe.prototype.transform = function (value, args) {
                    var keys = [];
                    for (var key in value) {
                        keys.push({ key: key, value: value[key] });
                    }
                    console.log(keys);
                    return keys;
                };
                KeysPipe = __decorate([
                    core_1.Pipe({ name: 'keys' }), 
                    __metadata('design:paramtypes', [])
                ], KeysPipe);
                return KeysPipe;
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
                        template: "\n        <ul>\n            <li *ngFor=\"#entry of data | keys\">Key: {{entry.key}}, value: {{entry.value.name}}\n               <ul> <li *ngFor=\"#temp of entry.value.child\">value: {{temp.name}}</li>\n                </ul>\n            </li>\n            \n        </ul>\n    ",
                        pipes: [KeysPipe]
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