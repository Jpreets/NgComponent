System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var NgGrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NgGrid = (function () {
                function NgGrid() {
                    this.title = '';
                    this.columns = [];
                    this.data = [];
                    this.selectedRecord = {};
                    this.onSelectionChange = new core_1.EventEmitter();
                }
                NgGrid.prototype.selectRow = function (record) {
                    this.selectedRecord = record;
                    this.onSelectionChange.emit(this.selectedRecord);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgGrid.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgGrid.prototype, "columns", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgGrid.prototype, "data", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NgGrid.prototype, "onSelectionChange", void 0);
                NgGrid = __decorate([
                    core_1.Component({
                        selector: 'ng-grid',
                        template: " \n  <div class=\"container\">\n        <div class=\"generic-container\">\n            <div class=\"panel panel-default\">\n                <!-- Default panel contents -->\n                <div class=\"panel-heading\">\n                    <span class=\"lead\"> {{ title }} </span><br>\n               </div>\n                <div style=\"overflow-x:auto;\" class=\"table-responsive\">\n\n                    <table class=\"table table-hover\">\n                        <thead>\n                            <tr>\n                                <th *ngFor=\"#col of columns\"> {{ col.value }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"#record of data\" \n                                (click)=\"selectRow(record)\" \n                                [ngClass]=\"{selected: record.id === selectedRecord.id}\">\n\n                                    <td *ngFor=\"#col of columns\"> {{ record[col.id] }}</td>\n                                </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>",
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgGrid);
                return NgGrid;
            }());
            exports_1("NgGrid", NgGrid);
        }
    }
});
//# sourceMappingURL=NgGrid.js.map