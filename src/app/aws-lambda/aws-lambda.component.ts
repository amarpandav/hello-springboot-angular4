import {Component, OnInit, ViewChild} from "@angular/core";
import {LambdaService} from "../shared/services/lambda.service";
import {HpathyProduct} from "../shared/models/hpathy-product.dto";
import {NgForm} from "@angular/forms";
import {MessageService} from "../shared/services/message.service";

@Component({
  selector: 'app-aws-lambda',
  templateUrl: './aws-lambda.component.html'
})
export class AwsLambdaComponent implements OnInit {

  lambdaMessage:string;

  hpathyProducts:HpathyProduct[];

  @ViewChild('productForm') productForm:NgForm;

  hpathyProduct:HpathyProduct = HpathyProduct.newInstance(); // new product


  constructor(private lambdaService:LambdaService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.lambdaService.hellolambda().subscribe(
      (data:any) => {
        this.lambdaMessage = data;
      }
    );

    this.findHpathyProducts();
  }

  findHpathyProducts() {
    this.lambdaService.getHpathyProducts().subscribe(
      (data:any) => {
        this.hpathyProducts = data;
      }
    );
  }

  onCreateHpathyProduct() {
    this.hpathyProduct.id = this.hpathyProducts.length+1; //In reality this should be uuid

    this.lambdaService.createHpathyProduct(this.hpathyProduct).subscribe(
      (response) => {
        console.log("onCreateHpathyProduct response:"+response);
        this.messageService.info(JSON.stringify(this.hpathyProduct), "Saved successfully!");
        this.findHpathyProducts(); //Read the records again from DB
        this.hpathyProduct = HpathyProduct.newInstance();
        this.productForm.resetForm();
      },
      (error) => {
        this.messageService.error(error, "Error in onCreateHpathyProduct.");
      }
    );
  }

  onDeleteHpathyProduct(productIdToDelete: number) {
    this.lambdaService.deleteHpathyProduct(productIdToDelete).subscribe(
      (response) => {
        console.log("onDeleteHpathyProduct response:"+response);
        this.messageService.info(JSON.stringify(response), "Product delete successfully!");
        this.findHpathyProducts(); //Read the records again from DB
      },
      (error) => {
        this.messageService.error(error, "Error in onDeleteHpathyProduct.");
      }
    );
  }

}
