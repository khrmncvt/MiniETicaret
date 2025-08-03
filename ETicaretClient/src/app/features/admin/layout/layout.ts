import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Sidebar } from "./sidebar/sidebar";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [MatSidenavModule, Sidebar, Header, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
