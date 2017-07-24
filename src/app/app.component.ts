import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UserService} from "./shared/services/user.service";
import {UserDto} from "./shared/models/user.dto";
import {AppAttributesDto} from "./shared/models/app-attributes.dto";
import {AppAttributesService} from "./shared/services/app-attributes.service";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  appAttributes: AppAttributesDto = AppAttributesDto.newInstance();

  constructor(private toastr:ToastsManager, private vcr:ViewContainerRef, private appAttributesService: AppAttributesService) {
    this.toastr.setRootViewContainerRef(vcr);

    //Here initialize the app related services e.g.
    this.initializeAppAttributes();
  }

  ngOnInit() {
  }


  private initializeAppAttributes(){
    this.appAttributesService.initializeAppAttributes().subscribe(
      (data: any) => {
        this.appAttributes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
