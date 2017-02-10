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
    var NgCheckBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgCheckBox = (function () {
                function NgCheckBox() {
                }
                NgCheckBox.prototype.checkData = function (key) {
                    console.log(this.value);
                    flag = 0;
                    for (var i = 0; i < this.value.length; i++) {
                        if (key.id == this.value[i]) {
                            this.value.splice(this.value.indexOf(key.id), 1);
                            flag = 1;
                        }
                    }
                    if (flag == 0)
                        this.value.push(key.id);
                };
                NgCheckBox.prototype.checkValue = function (key) {
                    for (var i = 0; i < this.value.length; i++) {
                        if (key.id == this.value[i]) {
                            return true;
                        }
                    }
                    return false;
                };
                NgCheckBox.prototype.ngOnInit = function () {
                    console.log(this.data);
                    console.log(this.name);
                    console.log(this.value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgCheckBox.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgCheckBox.prototype, "name", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgCheckBox.prototype, "value", void 0);
                NgCheckBox = __decorate([
                    core_1.Component({
                        selector: 'ng-checkbox',
                        template: "\n        <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <span class=\"lead\"> CheckBox </span><br>\n           </div>\n            <h3>{{name}}</h3>\n            <div *ngFor='#key of data'>\n             <i [ngClass]=\"checkValue(key) ?'fa fa-check-square-o' : 'fa fa-square-o'\"\n                   style=\"font-size:20px\"\n                   (click)=\"checkData(key)\"\n                   aria-hidden=\"true\">{{key.value}}</i>\n               <br><br>\n            </div>\n         </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgCheckBox);
                return NgCheckBox;
            }());
            exports_1("NgCheckBox", NgCheckBox);
        }
    }
});
//# sourceMappingURL=NgCheckBox.js.map