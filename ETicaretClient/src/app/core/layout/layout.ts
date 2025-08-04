import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Alertify, MessageType, PositionType } from '../services/alertify';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout{
  constructor(private alertify: Alertify) { }

  ngOnInit(): void {
    this.alertify.message("Deneme", {
      messageType: MessageType.Success,
      position: PositionType.TopRight,
      delay: 5
    });
  }
}
