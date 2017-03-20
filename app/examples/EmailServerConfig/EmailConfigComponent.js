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
                    this.data = [];
                    this.value_check = [];
                    this.showError = false;
                    this.edit = false;
                    this.combo_data = [
                        { id: 1, value: "Alto" },
                        { id: 2, value: "Amaze" }
                    ];
                    this.checkRadioData = [
                        { id: 1, value: "Bike" },
                        { id: 2, value: "Car" }
                    ];
                    this.dialogActive = { bool: false };
                    this.dialogAddEditActive = { bool: false };
                    this.properties = [
                        { type: "text", label: "smtpHost", name: "smtpHost", required: true },
                        { type: "text", label: "smtpPort", name: "smtpPort", required: true },
                        { type: "text", label: "smtpUsername", name: "smtpUsername", required: true },
                        { type: "password", label: "smtpPassword", name: "smtpPassword", required: true },
                        { type: "radio", label: "vehicle", name: "vehicleRadio", value: this.value, checkRadioData: this.checkRadioData, required: true },
                        { type: "check", label: "vehicles", name: "vehicleCheck", value_check: this.value_check, checkRadioData: this.checkRadioData, required: true }
                    ];
                    this.title = 'Email Configurations';
                    this.columns = [
                        { id: 'id', value: '#' },
                        { id: 'smtpHost', value: 'Host' },
                        { id: 'smtpPort', value: 'Port' },
                        { id: 'smtpUsername', value: 'Username' },
                        { id: 'smtpPassword', value: 'Password' },
                        { id: 'vehicleRadio', value: 'Vehicle' },
                        { id: 'vehicleCheck', value: 'Vehicles' }
                    ];
                }
                EmailConfigComponent.prototype.showAddPopup = function () {
                    this.selectedRecord = {};
                    this.selectedRecord.checkId = [];
                    this.edit = false;
                    this.dialogAddEditActive.bool = true;
                };
                EmailConfigComponent.prototype.closeAddPopup = function () {
                    this.dialogAddEditActive.bool = false;
                };
                EmailConfigComponent.prototype.showEditPopup = function () {
                    this.value_check = [];
                    this.edit = true;
                    this.dialogAddEditActive.bool = true;
                    console.log(this.data);
                    for (var i = 0; i < this.checkRadioData.length; i++) {
                        if (this.checkRadioData[i].value == this.selectedRecord.vehicleRadio) {
                            this.selectedRecord.radioId = this.checkRadioData[i].id;
                        }
                    }
                    this.selectedRecord.checkId = [];
                    for (var i = 0; i < this.selectedRecord.checkBox.length; i++) {
                        this.selectedRecord.checkId.push(this.selectedRecord.checkBox[i].checkId);
                    }
                    console.log(this.selectedRecord);
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
                    console.log(this.data);
                };
                EmailConfigComponent.prototype.getSelectedRecord = function (event) {
                    this.selectedRecord = event;
                    console.log(event);
                };
                EmailConfigComponent.prototype.editEmailConfig = function (record) {
                    var _this = this;
                    if (record.vehicleCheck == undefined)
                        record.vehicleCheck = [];
                    checkId = [];
                    for (var i = 0; i < record.vehicleCheck.length; i++) {
                        for (var j = 0; j < this.checkRadioData.length; j++) {
                            if (record.vehicleCheck[i] == this.checkRadioData[j].value) {
                                checkId.push(this.checkRadioData[j].id);
                            }
                        }
                    }
                    console.log(checkId);
                    var data = new http_1.URLSearchParams();
                    data.append('id', record.id);
                    data.append('smtpHost', record.smtpHost);
                    data.append('smtpPort', record.smtpPort);
                    data.append('smtpUsername', record.smtpUsername);
                    data.append('smtpPassword', record.smtpPassword);
                    data.append('vehicleRadio', record.vehicleRadio);
                    data.append('vehicleCheck', record.vehicleCheck);
                    data.append('checkId', checkId);
                    data.append('email', "anshulgupta231193@gmail.com");
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/x-www-form-urlencoded");
                    this.http
                        .post('http://localhost:8084/EmailChimp/update-email-configuration', data, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        _this.closeEditPopup();
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                EmailConfigComponent.prototype.addEmailConfig = function (record) {
                    var _this = this;
                    if (record.vehicleCheck == undefined)
                        record.vehicleCheck = [];
                    checkId = [];
                    for (var i = 0; i < record.vehicleCheck.length; i++) {
                        for (var j = 0; j < this.checkRadioData.length; j++) {
                            if (record.vehicleCheck[i] == this.checkRadioData[j].value) {
                                checkId.push(this.checkRadioData[j].id);
                            }
                        }
                    }
                    console.log(checkId);
                    var data = new http_1.URLSearchParams();
                    data.append('smtpHost', record.smtpHost);
                    data.append('smtpPort', record.smtpPort);
                    data.append('smtpUsername', record.smtpUsername);
                    data.append('smtpPassword', record.smtpPassword);
                    data.append('vehicleRadio', record.vehicleRadio);
                    data.append('vehicleCheck', record.vehicleCheck);
                    data.append('checkId', checkId);
                    data.append('email', "anshulgupta231193@gmail.com");
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/x-www-form-urlencoded");
                    this.http
                        .post('http://localhost:8084/EmailChimp/add-email-configuration', data, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        _this.closeAddPopup();
                        window.location.reload();
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                EmailConfigComponent = __decorate([
                    core_1.Component({
                        template: "\n    <button type=\"button\" (click)=\"showAddPopup()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                Add</button>\n    <button [ngClass]=\"{disabled : !selectedRecord.id}\" (click)=\"showEditPopup()\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Edit</button>\n    <button [ngClass]=\"{disabled : !selectedRecord.id}\" (click)=\"delete()\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Delete</button>\n      <ng-grid \n                [title]=\"title\"\n                [data]=\"data\" \n                [columns]=\"columns\"\n                (onSelectionChange)=\"getSelectedRecord($event);\" \n                [dialogActive]=\"dialogAddEditActive\"\n                [selectedRecord]=\"selectedRecord\"\n            >\n            </ng-grid>\n            <ng-popup\n             [title]=\"title\"\n             [dialogActive]=\"dialogActive\" \n             [hidden]=\"!showError\"\n            >\n             <h3>Server Down</h3>\n          </ng-popup>\n          <ng-popup\n             [title]=\"title\"\n             [dialogActive]=\"dialogAddEditActive\" \n          >\n            <ng-form \n              [model]=\"properties\" \n              [selectedRecord]=\"selectedRecord\"\n              (onSubmitEvent)=\"edit ? editEmailConfig($event) : addEmailConfig($event)\" >\n            </ng-form>\n                 \n          </ng-popup>\n    ",
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