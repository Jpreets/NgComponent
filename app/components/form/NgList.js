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
    var NgList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgList = (function () {
                function NgList() {
                    this.data = [];
                    this.multiselect = false;
                    this.selectable = false;
                    this.selectedRecord = { id: 0 };
                    this.onSelectionChange = new core_1.EventEmitter();
                }
                NgList.prototype.selectRow = function (record) {
                    if (!this.selectable)
                        return;
                    this.selectedRecord = record;
                    this.onSelectionChange.emit(this.selectedRecord);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgList.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgList.prototype, "multiselect", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgList.prototype, "selectable", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NgList.prototype, "onSelectionChange", void 0);
                NgList = __decorate([
                    core_1.Component({
                        selector: 'ng-list',
                        template: "\n\t<div class=\"list-group\">\n  \t  <div \n\t\t*ngFor=\"#rec of data\" \n\t\t[ngClass]=\"rec.disable?\n\t\t'list-group-item list-group-item-'+rec.type+' disabled':\n\t\t'list-group-item list-group-item-'+rec.type +' '+(rec.id==selectedRecord.id?'selected':'') \"\n\t\t[innerHTML]=\"rec.body\"\n\t\t (click)=\"selectRow(rec)\" \n\t\t ></div>\n\t  </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgList);
                return NgList;
            }());
            exports_1("NgList", NgList);
        }
    }
});
//# sourceMappingURL=NgList.js.map