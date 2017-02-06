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
    var SelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SelectComponent = (function () {
                function SelectComponent() {
                    console.log(this.select_data); // here it prints `null`
                }
                SelectComponent.prototype.ngOnInit = function () {
                    console.log(this.select_data); // here it prints the actual value
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SelectComponent.prototype, "select_data", void 0);
                SelectComponent = __decorate([
                    core_1.Component({
                        selector: 'ng-select',
                        template: "\n\t\t<select *ngIf=\"select_data.key=='id'\" class=\"form-control\">\n\t\t\t<option *ngFor=\"#data of select_data.data\" id={{data.id}} value={{data.value}}>{{data.value}}</option>\n\t\t</select>\n\t\t<select *ngIf=\"select_data.key=='value'\" class=\"form-control\">\n\t\t\t<option *ngFor=\"#data of select_data.data\" id={{data.value}} value={{data.id}}>{{data.id}}</option>\n\t\t</select>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SelectComponent);
                return SelectComponent;
            }());
            exports_1("SelectComponent", SelectComponent);
        }
    }
});
//# sourceMappingURL=SelectComponent.js.map