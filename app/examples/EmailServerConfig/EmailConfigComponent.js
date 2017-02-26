System.register(['angular2/core', 'angular2/common', 'angular2/http', "app/services/EmailServerConfigService", "app/components/EmailSettingsGrid/NgEmailSettingsGrid", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, EmailServerConfigService_1, NgEmailSettingsGrid_1;
    var EmailConfigComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (EmailServerConfigService_1_1) {
                EmailServerConfigService_1 = EmailServerConfigService_1_1;
            },
            function (NgEmailSettingsGrid_1_1) {
                NgEmailSettingsGrid_1 = NgEmailSettingsGrid_1_1;
            },
            function (_1) {}],
        execute: function() {
            EmailConfigComponent = (function () {
                function EmailConfigComponent(_emailConfig) {
                    this._emailConfig = _emailConfig;
                    this.title = 'Email Configurations';
                    this.selectedRecord = {};
                    this.columns = [
                        { id: 'id', value: '#' },
                        { id: 'smtpHost', value: 'Host' },
                        { id: 'smtpPort', value: 'Port' },
                        { id: 'smtpUsername', value: 'Username' },
                        { id: 'smtpPassword', value: 'Password' }
                    ];
                }
                EmailConfigComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._emailConfig.getContacts().subscribe(function (data) {
                        _this.data = data;
                    });
                };
                EmailConfigComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                EmailConfigComponent.prototype.getSelectedRecord = function (event) {
                    this.selectedRecord = event;
                    console.log(this.selectedRecord);
                };
                EmailConfigComponent = __decorate([
                    core_1.Component({
                        template: "\n      <ng-grid \n                [title]=\"title\"\n                [data]=\"data\" \n                [columns]=\"columns\"\n                (onSelectionChange)=\"getSelectedRecord($event);\" \n            >\n            </ng-grid>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, NgEmailSettingsGrid_1.NgEmailSettingsGrid],
                        providers: [EmailServerConfigService_1.EmailServerConfigService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof EmailServerConfigService_1.EmailServerConfigService !== 'undefined' && EmailServerConfigService_1.EmailServerConfigService) === 'function' && _a) || Object])
                ], EmailConfigComponent);
                return EmailConfigComponent;
                var _a;
            }());
            exports_1("EmailConfigComponent", EmailConfigComponent);
        }
    }
});
//# sourceMappingURL=EmailConfigComponent.js.map