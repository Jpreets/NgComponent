System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var NgPopup;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NgPopup = (function () {
                function NgPopup() {
                    this.title = '';
                }
                NgPopup.prototype.ngOnInit = function () {
                    console.log(this.dialogActive);
                };
                NgPopup.prototype.closePopup = function () {
                    this.dialogActive.bool = false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgPopup.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgPopup.prototype, "dialogActive", void 0);
                NgPopup = __decorate([
                    core_1.Component({
                        selector: 'ng-popup'
                    }),
                    core_1.View({
                        template: "\n  <div class=\"modal show\"  role=\"dialog\" *ngIf=\"dialogActive.bool\" >\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" (click)=\"closePopup()\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">{{title}}</h4>\n        </div>\n        <div class=\"modal-body\">\n         <div class=\"generic-container\"     style=\"overflow: auto;\">\n          <ng-content></ng-content>             \n        </div>\n        </div>\n      </div>\n    </div>\n  </div>",
                        directives: [common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgPopup);
                return NgPopup;
            }());
            exports_1("NgPopup", NgPopup);
        }
    }
});
//# sourceMappingURL=NgPopup.js.map