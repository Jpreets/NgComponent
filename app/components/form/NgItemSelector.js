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
    var DraggableDirective, DropTargetDirective, NgItemSelector;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DraggableDirective = (function () {
                function DraggableDirective() {
                    this.options = {};
                }
                Object.defineProperty(DraggableDirective.prototype, "draggable", {
                    get: function () {
                        return true;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DraggableDirective.prototype, "myDraggable", {
                    set: function (options) {
                        if (options) {
                            this.options = options;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                DraggableDirective.prototype.onDragStart = function (event) {
                    var _a = this.options, _b = _a.zone, zone = _b === void 0 ? 'zone' : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
                    event.dataTransfer.setData("application/x-" + zone, JSON.stringify(data));
                };
                __decorate([
                    core_1.HostBinding('draggable'), 
                    __metadata('design:type', Object)
                ], DraggableDirective.prototype, "draggable", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DraggableDirective.prototype, "myDraggable", null);
                __decorate([
                    core_1.HostListener('dragstart', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], DraggableDirective.prototype, "onDragStart", null);
                DraggableDirective = __decorate([
                    core_1.Directive({
                        selector: '[myDraggable]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DraggableDirective);
                return DraggableDirective;
            }());
            exports_1("DraggableDirective", DraggableDirective);
            DropTargetDirective = (function () {
                function DropTargetDirective() {
                    this.drop = new core_1.EventEmitter();
                    this.options = {};
                }
                Object.defineProperty(DropTargetDirective.prototype, "myDropTarget", {
                    set: function (options) {
                        if (options) {
                            this.options = options;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                DropTargetDirective.prototype.onDragOver = function (event) {
                    var _a = this.options, _b = _a.zone, zone = _b === void 0 ? 'zone' : _b, _c = _a.data, data = _c === void 0 ? {} : _c;
                    if (event.dataTransfer.types.indexOf("application/x-" + zone) >= 0) {
                        event.preventDefault();
                    }
                };
                DropTargetDirective.prototype.onDrop = function (event) {
                    var _a = this.options.zone, zone = _a === void 0 ? 'zone' : _a;
                    var data = JSON.parse(event.dataTransfer.getData("application/x-" + zone));
                    this.drop.next(data);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], DropTargetDirective.prototype, "myDropTarget", null);
                __decorate([
                    core_1.Output('myDrop'), 
                    __metadata('design:type', Object)
                ], DropTargetDirective.prototype, "drop", void 0);
                __decorate([
                    core_1.HostListener('dragover', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], DropTargetDirective.prototype, "onDragOver", null);
                __decorate([
                    core_1.HostListener('drop', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], DropTargetDirective.prototype, "onDrop", null);
                DropTargetDirective = __decorate([
                    core_1.Directive({
                        selector: '[myDropTarget]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], DropTargetDirective);
                return DropTargetDirective;
            }());
            exports_1("DropTargetDirective", DropTargetDirective);
            NgItemSelector = (function () {
                function NgItemSelector() {
                    this.data = [];
                    this.selectedData = [];
                }
                NgItemSelector.prototype.deSelectRecord = function (rec) {
                    if (!this.checkRecord(rec, this.data)) {
                        this.data.push(rec);
                        this.removeRecord(this.selectedData, rec);
                    }
                };
                NgItemSelector.prototype.selectRecord = function (rec) {
                    if (!this.checkRecord(rec, this.selectedData)) {
                        this.selectedData.push(rec);
                        this.removeRecord(this.data, rec);
                    }
                };
                NgItemSelector.prototype.removeRecord = function (array, rec) {
                    for (var i = array.length - 1; i >= 0; i--) {
                        if (array[i].id === rec.id) {
                            array.splice(i, 1);
                        }
                    }
                };
                NgItemSelector.prototype.checkRecord = function (rec, list) {
                    for (var i = 0; i < list.length; i++) {
                        if (rec.id == list[i].id) {
                            return true;
                        }
                    }
                    return false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgItemSelector.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgItemSelector.prototype, "selectedData", void 0);
                NgItemSelector = __decorate([
                    core_1.Component({
                        selector: 'ng-itemselector',
                        template: "\n <div class=\"row\">\n\t  <div class=\"col-xs-6\">\n\n<div class=\"panel panel-default\">\n    <div class=\"list-group\" style=\"height: 300px;overflow-y: auto;\"\n         [myDropTarget]\n        (myDrop)=\"deSelectRecord($event)\"\n    >\n      <div \n        *ngFor=\"#rec of data\" \n                (dblclick)=\"selectRecord(rec)\"\n        [ngClass]=\"rec.disable?\n        'list-group-item list-group-item-'+rec.type+' disabled':\n        'list-group-item list-group-item-'+rec.type +' ' \"\n        [innerHTML]=\"rec.body\" \n        [myDraggable]=\"{data: rec }\"\n       \n         ></div>\n\t  </div>\n    </div>\n</div>\n\t\t\t   <div class=\"col-xs-6\">\n<div class=\"panel panel-default\">\n         <div class=\"list-group\" style=\"height: 300px;overflow-y: auto;\"\n         [myDropTarget]\n        (myDrop)=\"selectRecord($event)\"\n    >\n      <div \n        *ngFor=\"#rec of selectedData\" \n        (dblclick)=\"deSelectRecord(rec)\"\n        [ngClass]=\"rec.disable?\n        'list-group-item list-group-item-'+rec.type+' disabled':\n        'list-group-item list-group-item-'+rec.type +' ' \"\n        [innerHTML]=\"rec.body\" \n        [myDraggable]=\"{data: rec }\"\n       \n         ></div>\n      </div>\n\t\t\t   </div>\n          </div>\n</div>\n\n    ",
                        directives: [DropTargetDirective, DraggableDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgItemSelector);
                return NgItemSelector;
            }());
            exports_1("NgItemSelector", NgItemSelector);
        }
    }
});
//# sourceMappingURL=NgItemSelector.js.map