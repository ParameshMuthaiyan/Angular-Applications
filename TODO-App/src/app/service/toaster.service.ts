import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(public toastr: ToastrService) {}

  showSuccess(msg:any): void {
    this.toastr.success('', msg, {
      timeOut: 3000,
      positionClass: 'toast-top-left'
    });
  }
  showError(msg:any): void {
    this.toastr.error('', msg, {
      timeOut: 3000,
      positionClass: 'toast-top-left'
    });
  }
  showInfo(msg:any): void {
    this.toastr.info('', msg, {
      timeOut: 3000,
    });
  }
  showWarning(msg:any): void {
    this.toastr.warning('', msg, {
      timeOut: 3000,
    });
  }
}
