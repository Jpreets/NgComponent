System.register(['angular2/core', 'angular2/common', "app/components/band/NgPanel", "app/components/grid/NgGrid"], function(exports_1, context_1) {
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
    var core_1, common_1, NgPanel_1, NgGrid_1;
    var PanelComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (NgPanel_1_1) {
                NgPanel_1 = NgPanel_1_1;
            },
            function (NgGrid_1_1) {
                NgGrid_1 = NgGrid_1_1;
            }],
        execute: function() {
            PanelComponent = (function () {
                function PanelComponent() {
                    this.panelData = [
                        {
                            type: 'default',
                            header: 'default<br>ddd',
                            body: 'Helllo<hr>test'
                        }, {
                            type: 'primary',
                            header: 'primary',
                            body: 'Helllo<hr>test'
                        }, {
                            type: 'success',
                            header: 'success',
                            body: 'Helllo<hr>test'
                        }, {
                            type: 'info',
                            header: 'info',
                            body: 'Helllo<hr>test'
                        }, {
                            type: 'warning',
                            header: 'warning',
                            body: 'Helllo<hr>test'
                        }, {
                            type: 'danger',
                            header: 'danger',
                            body: ''
                        }
                    ];
                    this.title = 'My Grid';
                    this.selectedRecord = {};
                    this.columns = [
                        { id: 'name', value: 'Name' },
                        { id: 'email', value: 'Email' },
                        { id: 'phone', value: 'Phone' },
                        { id: 'sex', value: 'Sex' },
                        { id: 't', value: 'Test' }
                    ];
                    this.data = [{
                            id: 1,
                            name: 'Jaspreet',
                            email: 'jpreet.singh20@gmail.com',
                            phone: '990099009900',
                            sex: 'Male',
                            t: '12345'
                        },
                        {
                            id: 2,
                            name: 'Jaspreet',
                            email: 'jpreet.singh20@gmail.com',
                            phone: '990099009900',
                            sex: 'Male'
                        },
                        {
                            id: 3,
                            name: 'Jaspreet',
                            email: 'jpreet.singh20@gmail.com',
                            phone: '990099009900',
                            sex: 'Male'
                        },
                        {
                            id: 4,
                            name: 'Jaspreet',
                            email: 'jpreet.singh20@gmail.com',
                            phone: '990099009900',
                            sex: 'Male'
                        },
                        {
                            id: 5,
                            name: 'Jaspreet',
                            email: 'jpreet.singh20@gmail.com',
                            phone: '990099009900',
                            sex: 'Male'
                        },];
                }
                PanelComponent.prototype.getSelectedRecord = function (event) {
                    this.selectedRecord = event;
                };
                PanelComponent = __decorate([
                    core_1.Component({
                        template: "\n          <ng-panel  *ngFor=\"#record of panelData\"\n           [type]=\"record.type\"\n           [header]=\"record.header\"\n           >\n            <ng-grid [title]=\"title\" [data]=\"data\" [columns]=\"columns\" (onSelectionChange)=\"getSelectedRecord($event);\" ></ng-grid>\n            </ng-panel>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, NgPanel_1.NgPanel, NgGrid_1.NgGrid]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PanelComponent);
                return PanelComponent;
            }());
            exports_1("PanelComponent", PanelComponent);
        }
    }
});
//# sourceMappingURL=PanelComponent.js.map