System.register(["angular2/core", 'angular2/common', "app/components/RadioButtons/NgRadioButtons"], function(exports_1, context_1) {
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
    var core_1, common_1, NgRadioButtons_1;
    var RadioButtonsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (NgRadioButtons_1_1) {
                NgRadioButtons_1 = NgRadioButtons_1_1;
            }],
        execute: function() {
            RadioButtonsComponent = (function () {
                function RadioButtonsComponent() {
                    this.name = "vehicles";
                    this.data = [
                        { id: 1, value: "Bike" },
                        { id: 2, value: "Car" }
                    ];
                    this.value = 1;
                }
                RadioButtonsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <span class=\"lead\"> Radio Buttons </span><br>\n           </div>\n        <ng-radiobuttons [name]=\"name\" [value]=\"value\" [data]=\"data\"></ng-radiobuttons>\n        </div>",
                        directives: [common_1.CORE_DIRECTIVES, NgRadioButtons_1.NgRadioButtons]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RadioButtonsComponent);
                return RadioButtonsComponent;
            }());
            exports_1("RadioButtonsComponent", RadioButtonsComponent);
        }
    }
});
//# sourceMappingURL=RadioButtonsComponent.js.map