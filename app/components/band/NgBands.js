System.register(['angular2/core', 'angular2/common', 'app/components/band/NgBand'], function(exports_1, context_1) {
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
    var core_1, common_1, NgBand_1;
    var NgBands;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (NgBand_1_1) {
                NgBand_1 = NgBand_1_1;
            }],
        execute: function() {
            NgBands = (function () {
                function NgBands() {
                }
                __decorate([
                    core_1.ContentChildren(NgBand_1.NgBand), 
                    __metadata('design:type', core_1.QueryList)
                ], NgBands.prototype, "bands", void 0);
                NgBands = __decorate([
                    core_1.Component({
                        selector: 'ng-bands',
                        template: "\n  <div class=\"row text-center\">\n     <ng-content ></ng-content>    \n  </div>\n  ",
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgBands);
                return NgBands;
            }());
            exports_1("NgBands", NgBands);
        }
    }
});
//# sourceMappingURL=NgBands.js.map