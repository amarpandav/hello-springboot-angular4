import {Component, OnInit} from "@angular/core";
import {LambdaService} from "../shared/services/lambda.service";

@Component({
  selector: 'app-aws-lambda',
  templateUrl: './aws-lambda.component.html'
})
export class AwsLambdaComponent implements OnInit {

  lambdaMessage: string;

  constructor(private lambdaService:LambdaService) {
  }

  ngOnInit() {
    this.lambdaService.hellolambda().subscribe(
      (data:any) => {
        this.lambdaMessage = data;
      }
    )
    ;
  }

}
