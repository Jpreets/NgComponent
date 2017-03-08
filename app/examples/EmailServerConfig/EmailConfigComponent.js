System.register(['angular2/core', 'angular2/common', 'angular2/http', "app/services/EmailServerConfigService", "app/components/grid/NgGrid", "app/components/popup/NgPopup", "app/components/form/NgForm", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, EmailServerConfigService_1, NgGrid_1, NgPopup_1, NgForm_1;
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
            function (NgGrid_1_1) {
                NgGrid_1 = NgGrid_1_1;
            },
            function (NgPopup_1_1) {
                NgPopup_1 = NgPopup_1_1;
            },
            function (NgForm_1_1) {
                NgForm_1 = NgForm_1_1;
            },
            function (_1) {}],
        execute: function() {
            EmailConfigComponent = (function () {
                function EmailConfigComponent(_emailConfig, http) {
                    this._emailConfig = _emailConfig;
                    this.http = http;
                    this.selectedRecord = {};
                    this.showError = false;
                    this.edit = false;
                    this.properties = [
                        { type: "text", label: "smtpHost", name: name, required: true },
                        { type: "text", label: "smtpPort", name: name, required: true },
                        { type: "text", label: "smtpUsername", name: name, required: true },
                        { type: "password", label: "smtpPassword", name: name, required: true }
                    ];
                    this.dialogActive = { bool: false };
                    this.dialogAddEditActive = { bool: false };
                    this.title = 'Email Configurations';
                    this.columns = [
                        { id: 'id', value: '#' },
                        { id: 'smtpHost', value: 'Host' },
                        { id: 'smtpPort', value: 'Port' },
                        { id: 'smtpUsername', value: 'Username' },
                        { id: 'smtpPassword', value: 'Password' }
                    ];
                }
                EmailConfigComponent.prototype.showAddPopup = function () {
                    this.selectedRecord = {};
                    this.edit = false;
                    this.dialogAddEditActive.bool = true;
                };
                EmailConfigComponent.prototype.closeAddPopup = function () {
                    this.selectedRecord = {};
                    this.dialogAddEditActive.bool = false;
                };
                EmailConfigComponent.prototype.showEditPopup = function () {
                    this.edit = true;
                    this.dialogAddEditActive.bool = true;
                };
                EmailConfigComponent.prototype.closeEditPopup = function () {
                    this.dialogAddEditActive.bool = false;
                };
                EmailConfigComponent.prototype.showPopup = function () {
                    this.dialogActive.bool = true;
                };
                EmailConfigComponent.prototype.closePopup = function () {
                    this.dialogActive.bool = false;
                };
                EmailConfigComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._emailConfig.getContacts().subscribe(function (data) {
                        _this.data = data;
                    }, function (err) {
                        _this.showError = true;
                        _this.showPopup();
                    });
                };
                EmailConfigComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                EmailConfigComponent.prototype.getSelectedRecord = function (event) {
                    this.selectedRecord = event;
                };
                EmailConfigComponent.prototype.editEmailConfig = function (record) {
                    console.log(record);
                    var data = new http_1.URLSearchParams();
                    data.append('id', record.id);
                    data.append('smtpHost', record.smtpHost);
                    data.append('smtpPort', record.smtpPort);
                    data.append('smtpUsername', record.smtpUsername);
                    data.append('smtpPassword', record.smtpPassword);
                    data.append('email', "anshulgupta231193@gmail.com");
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/x-www-form-urlencoded");
                    this.http
                        .post('http://localhost:8084/EmailChimp/update-email-configuration', data, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        // window.location.reload();
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                EmailConfigComponent.prototype.addEmailConfig = function (record) {
                    console.log(record);
                };
                EmailConfigComponent = __decorate([
                    core_1.Component({
                        template: "\n    <button type=\"button\" (click)=\"showAddPopup()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                Add</button>\n    <button *ngIf=\"!selectedRecord.id\" type=\"button\" class=\"btn btn-info disabled\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Edit</button>\n    <button *ngIf=\"selectedRecord.id\" (click)=\"showEditPopup()\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Edit</button>\n    <button *ngIf=\"!selectedRecord.id\" type=\"button\" class=\"btn btn-info disabled\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                Delete</button>\n    <button *ngIf=\"selectedRecord.id\" (click)=\"delete()\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Delete</button>\n      <ng-grid \n                [title]=\"title\"\n                [data]=\"data\" \n                [columns]=\"columns\"\n                (onSelectionChange)=\"getSelectedRecord($event);\" \n                [dialogActive]=\"dialogAddEditActive\"\n                [selectedRecord]=\"selectedRecord\"\n            >\n            </ng-grid>\n            <ng-popup\n             [title]=\"title\"\n             [dialogActive]=\"dialogActive\" \n             [hidden]=\"!showError\"\n            >\n             <h3>Server Down</h3>\n          </ng-popup>\n          <ng-popup\n             [title]=\"title\"\n             [dialogActive]=\"dialogAddEditActive\" \n          >\n            <ng-form [model]=\"properties\" [selectedRecord]=\"selectedRecord\"\n                (onSubmitEvent)=\"edit ? editEmailConfig($event) : addEmailConfig($event)\" ></ng-form>\n                    <form (ngSubmit)=\"edit ? editEmailConfig(selectedRecord) : addEmailConfig()\">\n                        <div class=\"form-group\">\n                          <label for=\"host\">SMTP HOST</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpHost\"   ngControl=\"hostctrl\" #hostctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"hostctrl.valid || hostctrl.pristine\" class=\"alert alert-danger\">\n                            Host is required\n                          </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                          <label for=\"port\">SMTP PORT</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpPort\"   ngControl=\"portctrl\" #portctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"portctrl.valid || portctrl.pristine\" class=\"alert alert-danger\">\n                            Port is required\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"username\">USERNAME</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpUsername\"   ngControl=\"userctrl\" #userctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"userctrl.valid || userctrl.pristine\" class=\"alert alert-danger\">\n                            Username is required\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"password\">PASSWORD</label>\n                          <input type=\"password\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpPassword\"   ngControl=\"pswdctrl\" #pswdctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"pswdctrl.valid || pswdctrl.pristine\" class=\"alert alert-danger\">\n                            Password is required\n                          </div>\n                        </div>\n                        \n                        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </form>\n          </ng-popup>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, NgGrid_1.NgGrid, NgPopup_1.NgPopup, NgForm_1.NgForm],
                        providers: [EmailServerConfigService_1.EmailServerConfigService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof EmailServerConfigService_1.EmailServerConfigService !== 'undefined' && EmailServerConfigService_1.EmailServerConfigService) === 'function' && _a) || Object, http_1.Http])
                ], EmailConfigComponent);
                return EmailConfigComponent;
                var _a;
            }());
            exports_1("EmailConfigComponent", EmailConfigComponent);
        }
    }
});
//# sourceMappingURL=EmailConfigComponent.js.map