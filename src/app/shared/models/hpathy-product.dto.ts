export class HpathyProduct {

  constructor(public id:number, public name: string, public category: string, public minutes: number, public price: number){}

  public static newInstance(){
    return new HpathyProduct(null, null, null, null, null);
  }
}
