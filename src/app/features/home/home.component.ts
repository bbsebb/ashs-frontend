import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {InstagramService} from "@app/share/services/instagram.service";
import {Observable, tap} from "rxjs";
import {Media} from "@app/share/models/media";
import {InstagramMediaComponent} from "./instagram/instagram-media/instagram-media.component";
import {MatProgressBar} from "@angular/material/progress-bar";
import {StubInstagramService} from "@app/share/services/stub-instagram.service";
import {IInstagramService, INSTAGRAM_SERVICE} from "@app/share/services/i-instagram.service";

@Component({
    selector: 'app-home',
    imports: [
        AsyncPipe,
        InstagramMediaComponent,
        MatProgressBar
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{



  private instagramService = inject(INSTAGRAM_SERVICE);
  media$!:Observable<Media[]>
  onLoadMedia:WritableSignal<boolean>  = signal(true);


  ngOnInit(): void {
    this.media$ = this.instagramService.getMedias().pipe(
      tap({
        next: () => this.onLoadMedia.set(false),
        error: () => this.onLoadMedia.set(false)
      })
    );
  }


}
