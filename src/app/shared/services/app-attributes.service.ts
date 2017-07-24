import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AppAttributesService {

  constructor(private http:Http) {
  }

  initializeAppAttributes() {
    return this.http.get("/rest/initializeAppAttributes")
      .map(
        (response:Response) => {
          const data = response.json();
          return data || {};
        }
      )
      .catch(
        (error:Response) => {
          console.log(error);
          return Observable.throw("something went wrong")
        }
      );
  }

}
