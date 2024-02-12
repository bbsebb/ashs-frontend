import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/components/header/header.component";
import {SidenavComponent} from "./core/components/sidenav/sidenav.component";
import {MainContentComponent} from "./core/components/main-content/main-content.component";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {IconRegistryService} from "./core/services/icon-registry.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = `Site de l'association sportive de Hoenheim sports handball`;

  constructor() {

  }

}
