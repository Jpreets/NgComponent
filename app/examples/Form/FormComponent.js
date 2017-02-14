System.register(["angular2/core", "app/components/form/NgForm", 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, NgForm_1, common_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NgForm_1_1) {
                NgForm_1 = NgForm_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                    this.combo_data = [
                        { id: 1, value: "Alto" },
                        { id: 2, value: "Amaze" }
                    ];
                    this.properties = [
                        { type: "text", label: "Full Name", required: true },
                        { type: "textarea", label: "Address", required: false },
                        { type: "combo", label: "Cars", data: this.combo_data, key: "id", value: "value", required: true },
                        { type: "combo", label: "Names", data: this.combo_data, key: "value", value: "id", required: false }
                    ];
                }
                FormComponent = __decorate([
                    core_1.Component({
                        template: "\n\t<h1>Forms</h1>\n\t  <hr/>\n\t  <ng-form [model]=\"properties\"></ng-form>",
                        directives: [common_1.CORE_DIRECTIVES, NgForm_1.NgForm]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=FormComponent.js.map