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
                    this.selectable = false;
                    this.selectedRecord = [];
                    this.onSelectionChange = new core_1.EventEmitter();
                }
                NgList.prototype.checkRecord = function (rec) {
                    for (var i = 0; i < this.selectedRecord.length; i++) {
                        if (rec.id == this.selectedRecord[i].id) {
                            return true;
                        }
                    }
                    return false;
                };
                NgList.prototype.selectRow = function (record, event) {
                    this.mouseEvent = event;
                    if (!this.selectable)
                        return;
                    if (!this.multiselect) {
                        for (var i = 0; i < this.selectedRecord.length; i++) {
                            rec = this.selectedRecord[i];
                            this.selectedRecord.splice(this.selectedRecord.indexOf(rec), 1);
                        }
                        this.selectedRecord.push(record);
                        console.log(this.selectedRecord);
                    }
                    else {
                        if (this.mouseEvent.type == "click" && event.ctrlKey) {
                            flag = 0;
                            for (var i = 0; i < this.selectedRecord.length; i++) {
                                if (record.id == this.selectedRecord[i].id) {
                                    this.selectedRecord.splice(this.selectedRecord.indexOf(record), 1);
                                    flag = 1;
                                }
                            }
                            if (flag == 0)
                                this.selectedRecord.push(record);
                        }
                        else if (this.mouseEvent.type == "click" && event.shiftKey) {
                            if (this.selectedRecord.length == 0)
                                this.selectedRecord.push(record);
                            else {
                                index_start = this.selectedRecord[this.selectedRecord.length - 1].id;
                                index_end = record.id;
                                if (index_start > index_end) {
                                    tmp = index_start;
                                    index_start = index_end;
                                    index_end = tmp;
                                }
                                for (var i = index_start; i <= index_end; i++) {
                                    this.selectedRecord.push(this.getId(i));
                                }
                            }
                        }
                        else if (this.mouseEvent.type == "click") {
                            this.selectedRecord = [];
                            this.selectedRecord.push(record);
                            console.log(this.selectedRecord);
                        }
                    }
                    this.onSelectionChange.emit(this.selectedRecord);
                };
                NgList.prototype.getId = function (i) {
                    for (var j = 0; j < this.data.length; j++) {
                        if (this.data[j].id == i)
                            return this.data[j];
                    }
                    return 0;
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
                        template: "\n    <div class=\"list-group\">\n      <div \n        *ngFor=\"#rec of data\" \n                (click)=\"selectRow(rec,$event)\"\n        [ngClass]=\"rec.disable?\n        'list-group-item list-group-item-'+rec.type+' disabled':\n        'list-group-item list-group-item-'+rec.type +' '+(checkRecord(rec)?'selected':'') \"\n        [innerHTML]=\"rec.body\" \n         ></div>\n      </div>\n    "
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