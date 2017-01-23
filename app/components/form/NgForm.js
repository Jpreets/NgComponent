System.register(["angular2/core", "app/components/form/SelectComponent"], function(exports_1, context_1) {
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
    var core_1, SelectComponent_1;
    var NgForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (SelectComponent_1_1) {
                SelectComponent_1 = SelectComponent_1_1;
            }],
        execute: function() {
            NgForm = (function () {
                function NgForm() {
                    console.log(this.model); // here it prints `null`
                }
                NgForm.prototype.ngOnInit = function () {
                    console.log(this.model); // here it prints the actual value
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], NgForm.prototype, "model", void 0);
                NgForm = __decorate([
                    core_1.Component({
                        selector: 'ng-form',
                        templateUrl: 'app/components/form/form.html',
                        directives: [SelectComponent_1.SelectComponent]
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