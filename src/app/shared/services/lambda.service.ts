import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LambdaService {

  constructor(private http:Http) {
  }

  hellolambda() {
    //new: https://wr1448vfh3.execute-api.eu-central-1.amazonaws.com/helloLambdaAPIStage/hellolambda
    //old: https://1mfhlujmie.execute-api.us-west-2.amazonaws.com/helloLambdaStage/hellolambda
    return this.http.get("https://wr1448vfh3.execute-api.eu-central-1.amazonaws.com/helloLambdaAPIStage/hellolambda")
      .map(
        (response:Response) => {
          const data = response.json();
          return data || {};
        }
      )
      .catch(
        (error:Response) => {
          console.log(error);
          return Observable.throw("something went wrong while calling aws hello lambda")
        }
      );
  }

}
