import {Component, inject, signal} from '@angular/core';
import {delay, tap} from "rxjs";
import {InstagramMediaComponent} from "./instagram/instagram-media/instagram-media.component";
import {MatProgressBar} from "@angular/material/progress-bar";
import {INSTAGRAM_SERVICE} from "@app/share/services/i-instagram.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-home',
  imports: [
    InstagramMediaComponent,
    MatProgressBar
  ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

  onLoadMedia = signal(true);
  mediaSignal= toSignal(inject(INSTAGRAM_SERVICE).getMedias().pipe(
    delay(2000),
    tap(() => this.onLoadMedia.set(false))
  ), {initialValue:[]});

}
