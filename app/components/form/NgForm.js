System.register(["angular2/core", "app/components/form/SelectComponent", "app/components/RadioButtons/NgRadioButtons", "app/components/CheckBox/NgCheckBox"], function(exports_1, context_1) {
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
    var core_1, SelectComponent_1, NgRadioButtons_1, NgCheckBox_1;
    var KeysPipe, NgForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SelectComponent_1_1) {
                SelectComponent_1 = SelectComponent_1_1;
            },
            function (NgRadioButtons_1_1) {
                NgRadioButtons_1 = NgRadioButtons_1_1;
            },
            function (NgCheckBox_1_1) {
                NgCheckBox_1 = NgCheckBox_1_1;
            }],
        execute: function() {
            KeysPipe = (function () {
                function KeysPipe() {
                }
                KeysPipe.prototype.transform = function (value, arg) {
                    for (var key in value) {
                        if (key == arg[0].label) {
                            return value[key];
                        }
                    }
                    return null;
                };
                KeysPipe = __decorate([
                    core_1.Pipe({ name: 'keys' }), 
                    __metadata('design:paramtypes', [])
                ], KeysPipe);
                return KeysPipe;
            }());
            exports_1("KeysPipe", KeysPipe);
            NgForm = (function () {
                function NgForm() {
                    this.onSubmitEvent = new core_1.EventEmitter();
                    this.value_check = [];
                    this.checkRadioData = [];
                    this.name = "vehicles";
                }
                NgForm.prototype.ngOnInit = function () {
                };
                NgForm.prototype.getSelectedValue = function (event) {
                    if (!this.selectedRecord.id) {
                        this.selectedRecord.vehicleRadio = event.value;
                    }
                    for (var i = 0; i < this.gridData.length; i++) {
                        if (this.gridData[i].id == this.selectedRecord.id) {
                            // this.gridData[i].vehicleRadio = event.value;
                            this.selectedRecord.vehicleRadio = event.value;
                        }
                    }
                };
                NgForm.prototype.getSelectedCheck = function (event) {
                    if (!this.selectedRecord.id) {
                        this.selectedRecord.vehicleCheck = event;
                    }
                    for (var i = 0; i < this.gridData.length; i++) {
                        if (this.gridData[i].id == this.selectedRecord.id) {
                            // this.gridData[i].vehicleCheck = event;
                            this.selectedRecord.vehicleCheck = event;
                        }
                    }
                };
                NgForm.prototype.onSubmit = function (form) {
                    console.log(this.selectedRecord);
                    this.onSubmitEvent.emit(this.selectedRecord);
                    this.value_check = [];
                    this.selectedRecord = [];
                    this.value = -1;
                    console.log(this.value_check + " " + this.value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgForm.prototype, "model", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgForm.prototype, "gridData", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgForm.prototype, "selectedRecord", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NgForm.prototype, "onSubmitEvent", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgForm.prototype, "value", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgForm.prototype, "value_check", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgForm.prototype, "checkRadioData", void 0);
                NgForm = __decorate([
                    core_1.Component({
                        selector: 'ng-form',
                        templateUrl: 'app/components/form/form.html',
                        directives: [SelectComponent_1.SelectComponent, NgRadioButtons_1.NgRadioButtons, NgCheckBox_1.NgCheckBox],
                        pipes: [KeysPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgForm);
                return NgForm;
            }());
            exports_1("NgForm", NgForm);
        }
    }
});
//# sourceMappingURL=NgForm.js.map