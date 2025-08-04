import { Injectable } from '@angular/core';
declare var alertify: any;

export enum MessageType {
  Success = "success",
  Error = "error",
  Warning = "warning",
  Message = "message",
  Notify = "notify"
}

export enum PositionType{
  TopLeft = "top-left",
  TopCenter = "top-center",
  TopRight = "top-right",
  BottomLeft = "bottom-left",
  BottomCenter = "bottom-center",
  BottomRight = "bottom-right"
}

export class AlertifyOptions{
  messageType: MessageType = MessageType.Message;
  position: PositionType = PositionType.BottomRight;
  delay: number = 3;
  dismissOther: boolean = false
}

@Injectable({
  providedIn: 'root'
})
export class Alertify {

  constructor() { }

  message(message: string, options: Partial<AlertifyOptions>) {
    // ["success"]() = alertify.success()
    const alert = alertify[options.messageType](message);
    alert.set('notifier','position', options.position);
    alert.set('notifier','delay', options.delay);
    if(options.dismissOther)
      alert.dismissOther();
  }
}

