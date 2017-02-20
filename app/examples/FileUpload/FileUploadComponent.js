System.register(["angular2/core", 'angular2/common', "app/components/FileUpload/NgFileUpload"], function(exports_1, context_1) {
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
    var core_1, common_1, NgFileUpload_1;
    var FileUploadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (NgFileUpload_1_1) {
                NgFileUpload_1 = NgFileUpload_1_1;
            }],
        execute: function() {
            FileUploadComponent = (function () {
                function FileUploadComponent() {
                }
                FileUploadComponent = __decorate([
                    core_1.Component({
                        template: "\n            <h1>File Upload</h1>\n            <hr/>\n            <form>\n                <ng-fileupload [activeColor]=\"'orangered'\" [baseColor]=\"'lightgray'\"></ng-fileupload>\n            </form>\n            ",
                        directives: [common_1.CORE_DIRECTIVES, NgFileUpload_1.NgFileUpload]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileUploadComponent);
                return FileUploadComponent;
            }());
            exports_1("FileUploadComponent", FileUploadComponent);
        }
    }
});
//# sourceMappingURL=FileUploadComponent.js.map