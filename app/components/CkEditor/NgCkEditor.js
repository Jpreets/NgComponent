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
    var NgCkEditor;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgCkEditor = (function () {
                function NgCkEditor() {
                }
                NgCkEditor.prototype.ngOnInit = function () {
                    this.content = '<p>Hello <strong>World !</strong></p>';
                    window['CKEDITOR']['replace']('editor1');
                };
                NgCkEditor = __decorate([
                    core_1.Component({
                        selector: 'ng-ckeditor',
                        template: "\n        <textarea name=\"editor1\" id=\"editor1\" rows=\"10\" cols=\"80\" [(ngModel)]=\"content\">\n            <p>Hello <strong>world</strong></p>\n        </textarea>\n        <div [innerHTML]=\"content\"></div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgCkEditor);
                return NgCkEditor;
            }());
            exports_1("NgCkEditor", NgCkEditor);
        }
    }
});
//# sourceMappingURL=NgCkEditor.js.map