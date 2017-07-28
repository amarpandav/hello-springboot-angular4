import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs/Rx";
import {HpathyProduct} from "../models/hpathy-product.dto";

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
          return Observable.throw("something went wrong while calling aws hellolambda() lambda.")
        }
      );
  }

  getHpathyProducts() {
    return this.http.get("https://09k3qaeu5a.execute-api.eu-central-1.amazonaws.com/prod/gethpathyproducts")
      .map(
        (response:Response) => {
          const data = response.json();
          return data.Items || {};
        }
      )
      .catch(
        (error:Response) => {
          console.log(error);
          return Observable.throw("something went wrong while calling aws getHpathyAllProducts() lambda!!")
        }
      );
  }

  createHpathyProduct(newHpathyProduct:HpathyProduct) {
    /*
     If you wann pass explicit headers.
     const headers1 = new Headers({'Content-Type':'application/json'});
     return this.http.post("https://09k3qaeu5a.execute-api.eu-central-1.amazonaws.com/prod/createhpathyproduct", newHpathyProduct, {headers: headers1});
     */
    return this.http.post("https://09k3qaeu5a.execute-api.eu-central-1.amazonaws.com/prod/createhpathyproduct", newHpathyProduct);
  }

  deleteHpathyProduct(productIdToDelete:number) {
    var param = {
      "id": productIdToDelete
    };
    //If we want to send the id as query parameter e.g. deletehpathyproduct?id=productIdToDelete then instead of {body: param}) use {param: param})
    return this.http.delete("https://09k3qaeu5a.execute-api.eu-central-1.amazonaws.com/prod/deletehpathyproduct", {body: param});
  }

}
