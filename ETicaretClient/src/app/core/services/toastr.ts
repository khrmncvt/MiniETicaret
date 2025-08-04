import { Injectable } from '@angular/core';

export enum MessageType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Info = "info"
}

export enum PositionType {
  TopLeft = "toast-top-left",
  TopCenter = "toast-top-center",
  TopRight = "toast-top-right",
  TopFullWidth = "toast-top-full-width",
  BottomLeft = "toast-bottom-left",
  BottomCenter = "toast-bottom-center",
  BottomRight = "toast-bottom-right",
  BottomFullWidth = "toast-bottom-full-width",
}

export class ToastrOptions {
  messageType: MessageType = MessageType.Info;
  position: PositionType = PositionType.BottomRight;
}

@Injectable({
  providedIn: 'root'
})
export class Toastr {

  constructor(private toastr: Toastr) { }

  message(message: string, title: string, options: Partial<ToastrOptions>) {
    this.toastr[options.messageType](message, title, {
      positionClass: options.position
    });
  }
}
