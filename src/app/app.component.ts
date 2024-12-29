import {Component} from '@angular/core';
import {MainContentComponent} from "@app/core/components/main-content/main-content.component";

@Component({
  selector: 'app-root',
  imports: [MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = `Site de l'association sportive de Hoenheim sports handball`;

  constructor() {

  }

}
