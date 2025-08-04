import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { Sidebar } from "./sidebar/sidebar";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MatSidenavModule, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
