import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./core/components/header/header.component";
import {SidenavComponent} from "./core/components/sidenav/sidenav.component";
import {MainContentComponent} from "./core/components/main-content/main-content.component";

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
