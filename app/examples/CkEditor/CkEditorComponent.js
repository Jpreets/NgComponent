System.register(["angular2/core", 'angular2/common', "app/components/CkEditor/NgCkEditor"], function(exports_1, context_1) {
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
    var core_1, common_1, NgCkEditor_1;
    var CkEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (NgCkEditor_1_1) {
                NgCkEditor_1 = NgCkEditor_1_1;
            }],
        execute: function() {
            CkEditorComponent = (function () {
                function CkEditorComponent() {
                }
                CkEditorComponent = __decorate([
                    core_1.Component({
                        template: "<div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <span class=\"lead\"> CkEditor </span><br>\n           </div>\n            <ng-ckeditor></ng-ckeditor>\n            </div>",
                        directives: [common_1.CORE_DIRECTIVES, NgCkEditor_1.NgCkEditor]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CkEditorComponent);
                return CkEditorComponent;
            }());
            exports_1("CkEditorComponent", CkEditorComponent);
        }
    }
});
//# sourceMappingURL=CkEditorComponent.js.map