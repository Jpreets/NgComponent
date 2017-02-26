System.register(['angular2/core', 'angular2/common', 'angular2/http', "app/components/popup/NgPopup", 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, http_1, NgPopup_1;
    var NgEmailSettingsGrid;
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
            function (NgPopup_1_1) {
                NgPopup_1 = NgPopup_1_1;
            },
            function (_1) {}],
        execute: function() {
            NgEmailSettingsGrid = (function () {
                function NgEmailSettingsGrid(http) {
                    this.http = http;
                    this.title = '';
                    this.columns = [];
                    this.data = [];
                    this.selectedRecord = {};
                    this.dialogActive = { bool: false };
                    this.dialogEditActive = { bool: false };
                    this.onSelectionChange = new core_1.EventEmitter();
                }
                NgEmailSettingsGrid.prototype.showEditPopup = function () {
                    this.dialogEditActive.bool = true;
                };
                NgEmailSettingsGrid.prototype.closeEditPopup = function () {
                    this.dialogEditActive.bool = false;
                };
                NgEmailSettingsGrid.prototype.showPopup = function () {
                    this.dialogActive.bool = true;
                };
                NgEmailSettingsGrid.prototype.closePopup = function () {
                    this.dialogActive.bool = false;
                };
                NgEmailSettingsGrid.prototype.selectRow = function (record) {
                    this.selectedRecord = record;
                    this.onSelectionChange.emit(this.selectedRecord);
                };
                NgEmailSettingsGrid.prototype.editEmailConfig = function (record) {
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
                        window.location.reload();
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                NgEmailSettingsGrid.prototype.addEmailConfig = function () {
                    var data = new http_1.URLSearchParams();
                    data.append('smtpHost', this.host);
                    data.append('smtpPort', this.port);
                    data.append('smtpUsername', this.username);
                    data.append('smtpPassword', this.password);
                    data.append('email', "anshulgupta231193@gmail.com");
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/x-www-form-urlencoded");
                    this.http
                        .post('http://localhost:8084/EmailChimp/add-email-configuration', data, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        window.location.reload();
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                NgEmailSettingsGrid.prototype.delete = function () {
                    console.log(this.selectedRecord);
                    var data = new http_1.URLSearchParams();
                    data.append('email', "anshulgupta231193@gmail.com");
                    data.append('id', this.selectedRecord.id);
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/x-www-form-urlencoded");
                    this.http
                        .post('http://localhost:8084/EmailChimp/delete-email-configuration', data, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        confirm('confirm delete!!');
                        window.location.href = "";
                    }, function (error) {
                        console.log(error.json());
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgEmailSettingsGrid.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgEmailSettingsGrid.prototype, "columns", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgEmailSettingsGrid.prototype, "data", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NgEmailSettingsGrid.prototype, "onSelectionChange", void 0);
                NgEmailSettingsGrid = __decorate([
                    core_1.Component({
                        selector: 'ng-grid',
                        template: " \n \n        <div class=\"generic-container\">\n            <div class=\"panel panel-default\">\n                <!-- Default panel contents -->\n                <div class=\"panel-heading\">\n                    <span class=\"lead\"> {{ title }} </span><br>\n               </div>\n               <button type=\"button\" (click)=\"showPopup()\" class=\"btn btn-primary\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                Add</button>\n                <button *ngIf=\"!selectedRecord.id\" type=\"button\" class=\"btn btn-info disabled\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Edit</button>\n                <button *ngIf=\"selectedRecord.id\" (click)=\"showEditPopup()\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Edit</button>\n                <button *ngIf=\"!selectedRecord.id\" type=\"button\" class=\"btn btn-info disabled\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                Delete</button>\n                <button *ngIf=\"selectedRecord.id\" (click)=\"delete()\" type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                Delete</button>\n\n                 <ng-popup\n                    [title]=\"title\"\n                    [dialogActive]=\"dialogActive\" \n                   >\n                    <form (ngSubmit)=\"addEmailConfig()\">\n                        <div class=\"form-group\">\n                          <label for=\"host\">SMTP HOST</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"host\"   ngControl=\"hostctrl\" #hostctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"hostctrl.valid || hostctrl.pristine\" class=\"alert alert-danger\">\n                            Host is required\n                          </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                          <label for=\"port\">SMTP PORT</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"port\"   ngControl=\"portctrl\" #portctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"portctrl.valid || portctrl.pristine\" class=\"alert alert-danger\">\n                            Port is required\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"username\">USERNAME</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"username\"   ngControl=\"userctrl\" #userctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"userctrl.valid || userctrl.pristine\" class=\"alert alert-danger\">\n                            Username is required\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"password\">PASSWORD</label>\n                          <input type=\"password\" class=\"form-control\"  required\n                            [(ngModel)]=\"password\"   ngControl=\"pswdctrl\" #pswdctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"pswdctrl.valid || pswdctrl.pristine\" class=\"alert alert-danger\">\n                            Password is required\n                          </div>\n                        </div>\n                        \n                        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </form>\n                 </ng-popup>\n                 \n                 <ng-popup\n                    [title]=\"title\"\n                    [dialogActive]=\"dialogEditActive\" \n                   >\n                    <form (ngSubmit)=\"editEmailConfig(selectedRecord)\">\n                        <div class=\"form-group\">\n                          <label for=\"host\">SMTP HOST</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpHost\"   ngControl=\"hostctrl\" #hostctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"hostctrl.valid || hostctrl.pristine\" class=\"alert alert-danger\">\n                            Host is required\n                          </div>\n                        </div>\n                        \n                        <div class=\"form-group\">\n                          <label for=\"port\">SMTP PORT</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpPort\"   ngControl=\"portctrl\" #portctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"portctrl.valid || portctrl.pristine\" class=\"alert alert-danger\">\n                            Port is required\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"username\">USERNAME</label>\n                          <input type=\"text\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpUsername\"   ngControl=\"userctrl\" #userctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"userctrl.valid || userctrl.pristine\" class=\"alert alert-danger\">\n                            Username is required\n                          </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                          <label for=\"password\">PASSWORD</label>\n                          <input type=\"password\" class=\"form-control\"  required\n                            [(ngModel)]=\"selectedRecord.smtpPassword\"   ngControl=\"pswdctrl\" #pswdctrl=\"ngForm\"\n                              >\n                          <div [hidden]=\"pswdctrl.valid || pswdctrl.pristine\" class=\"alert alert-danger\">\n                            Password is required\n                          </div>\n                        </div>\n                        \n                        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n                    </form>\n                 </ng-popup>\n                <div style=\"overflow-x:auto;\" class=\"table-responsive\">\n\n                    <table class=\"table table-hover\">\n                        <thead>\n                            <tr>\n                                <th *ngFor=\"#col of columns\"> {{ col.value }}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"#record of data\" \n                                (click)=\"selectRow(record)\" \n                                [ngClass]=\"{selected: record.id === selectedRecord.id}\">\n\n                                    <td *ngFor=\"#col of columns\"> {{ record[col.id] }}</td>\n                                </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n       \n    </div>",
                        directives: [common_1.CORE_DIRECTIVES, NgPopup_1.NgPopup]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NgEmailSettingsGrid);
                return NgEmailSettingsGrid;
            }());
            exports_1("NgEmailSettingsGrid", NgEmailSettingsGrid);
        }
    }
});
//# sourceMappingURL=NgEmailSettingsGrid.js.map