import {Injectable} from "@angular/core";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Injectable()
export class MessageService {

  constructor(private toastr: ToastsManager){
  }

  success(message: string, title?: string, options?: any){
    this.toastr.success(message, title, options);
  }

  info(message: string, title?: string, options?: any){
    this.toastr.info(message, title, options);
  }

  error(message: string, title?: string, options?: any){
    this.toastr.error(message, title, options);
  }
}
