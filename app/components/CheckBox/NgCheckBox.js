/*
** @anshul
*/
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
                    this.valueCheckChange = new core_1.EventEmitter();
                    this.emitCheckData = [];
                }
                NgCheckBox.prototype.checkData = function (key) {
                    flag = 0;
                    for (var i = 0; i < this.value.length; i++) {
                        if (key.id == this.value[i]) {
                            this.value.splice(this.value.indexOf(key.id), 1);
                            flag = 1;
                        }
                    }
                    if (flag == 0)
                        this.value.push(key.id);
                    for (var i = 0; i < this.data.length; i++) {
                        for (var j = 0; j < this.value.length; j++) {
                            if (this.value[j] == this.data[i].id) {
                                this.emitCheckData.push(this.data[i].value);
                            }
                        }
                    }
                    this.valueCheckChange.emit(this.emitCheckData);
                    this.emitCheckData = [];
                };
                NgCheckBox.prototype.checkValue = function (key) {
                    if (this.value != undefined)
                        for (var i = 0; i < this.value.length; i++) {
                            if (key.id == this.value[i]) {
                                return true;
                            }
                        }
                    return false;
                };
                NgCheckBox.prototype.ngOnInit = function () {
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
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NgCheckBox.prototype, "valueCheckChange", void 0);
                NgCheckBox = __decorate([
                    core_1.Component({
                        selector: 'ng-checkbox',
                        template: "\n            <div *ngFor='#key of data'>\n             <i [ngClass]=\"checkValue(key) ?'fa fa-check-square-o' : 'fa fa-square-o'\"\n                   style=\"font-size:20px\"\n                   (click)=\"checkData(key)\"\n                   aria-hidden=\"true\"></i>{{key.value}}\n               <br><br>\n           </div>\n    ",
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