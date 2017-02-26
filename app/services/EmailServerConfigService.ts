import {Injectable,} from "angular2/core";
import {EmailServerConfigModel} from "app/model/EmailServerConfigModel";
import { URLSearchParams, HttpModule ,Http, Response,Headers, RequestOptions } from 'angular2/http';
import 'rxjs/add/operator/map';

//@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()

@Injectable()
export class EmailServerConfigService {

   constructor (
        private http: Http
    ) {}
    
   getContacts() {
      //  let body = JSON.stringify({ 'foo': 'bar' });

       // let headers = new Headers({ 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp;q=0.8' });
       // let options = new RequestOptions({ headers: headers, method: 'get' });
        options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
        let params: URLSearchParams = new URLSearchParams();
        params.set("email", "anshulgupta231193@gmail.com");
        options.search = params;
    return this.http.get(`http://localhost:8084/EmailChimp/get-email-configuration`, {                                                                                                                                                                                                                                                        
        search: params
      })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        .map(
        data => {
            
            // the console.log(...) line prevents your code from working 
            // either remove it or add the line below (return ...)
            return data.json();
    });
   }
}
