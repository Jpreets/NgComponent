System.register(["angular2/core", 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var EmailServerConfigService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            //@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()
            EmailServerConfigService = (function () {
                function EmailServerConfigService(http) {
                    this.http = http;
                }
                EmailServerConfigService.prototype.getContacts = function () {
                    //  let body = JSON.stringify({ 'foo': 'bar' });
                    // let headers = new Headers({ 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp;q=0.8' });
                    // let options = new RequestOptions({ headers: headers, method: 'get' });
                    options = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
                    var params = new http_1.URLSearchParams();
                    params.set("email", "anshulgupta231193@gmail.com");
                    options.search = params;
                    return this.http.get("http://localhost:8084/EmailChimp/get-email-configuration", {
                        search: params
                    })
                        .map(function (data) {
                        // the console.log(...) line prevents your code from working 
                        // either remove it or add the line below (return ...)
                        return data.json();
                    });
                };
                EmailServerConfigService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmailServerConfigService);
                return EmailServerConfigService;
            }());
            exports_1("EmailServerConfigService", EmailServerConfigService);
        }
    }
});
//# sourceMappingURL=EmailServerConfigService.js.map