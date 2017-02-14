System.register(['angular2/core', 'angular2/common', "app/components/band/NgBand", "app/components/band/NgBands"], function(exports_1, context_1) {
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
    var core_1, common_1, NgBand_1, NgBands_1;
    var BandComponent;
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
            },
            function (NgBands_1_1) {
                NgBands_1 = NgBands_1_1;
            }],
        execute: function() {
            BandComponent = (function () {
                function BandComponent() {
                    this.bandData = [
                        {
                            img: 'images/tab.png',
                            label: 'Tabs',
                            link: '/TabComponent'
                        },
                        {
                            img: 'images/tab.png',
                            label: 'Band',
                            link: '/'
                        },
                        {
                            img: 'images/tree.jpeg',
                            label: 'Panels',
                            link: '/PanelComponent'
                        },
                        {
                            img: 'images/table.png',
                            label: 'Grid',
                            link: '/GridComponent'
                        },
                        {
                            img: 'images/tree.jpeg',
                            label: 'Tree View',
                            link: '/TreeComponent'
                        },
                        {
                            img: 'images/popup.png',
                            label: 'Popup',
                            link: '/PopupComponent'
                        },
                        {
                            img: 'images/form.png',
                            label: 'Forms',
                            link: '/FormComponent'
                        },
                        {
                            img: 'images/form.png',
                            label: 'Lists',
                            link: '/ListComponent'
                        },
                        {
                            img: 'images/form.png',
                            label: 'CheckBox',
                            link: '/CheckBoxComponent'
                        },
                        {
                            img: 'images/form.png',
                            label: 'RadioButtons',
                            link: '/RadioButtonsComponent'
                        },
                        {
                            img: 'images/form.png',
                            label: 'ItemSelectorComponent',
                            link: '/ItemSelectorComponent'
                        }
                    ];
                }
                BandComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h1>Bands</h1>\n\t  <hr/>\n     <ng-bands>\n         <ng-band  *ngFor=\"#record of bandData\">\n               <a  href=\"#{{record.link}}\" >\n                    <p><strong>{{record.label}}</strong></p>\n                    <img src=\"{{record.img}}\" style=\" width: 300px; height: 200px;\" >\n              </a>\n         </ng-band>\n     <ng-bands>\n    ",
                        directives: [common_1.CORE_DIRECTIVES, NgBands_1.NgBands, NgBand_1.NgBand]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BandComponent);
                return BandComponent;
            }());
            exports_1("BandComponent", BandComponent);
        }
    }
});
//# sourceMappingURL=BandComponent.js.map