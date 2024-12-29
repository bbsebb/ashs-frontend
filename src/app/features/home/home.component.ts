import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {InstagramService} from "../../share/services/instagram.service";
import {Observable, tap} from "rxjs";
import {Media} from "../../share/models/media";
import {FormatDatePipe} from "../../share/pipes/format-date.pipe";
import {InstagramMediaComponent} from "./instagram/instagram-media/instagram-media.component";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
    selector: 'app-home',
    imports: [
        AsyncPipe,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatGridList,
        MatGridTile,
        MatIcon,
        MatIconButton,
        MatMenu,
        MatMenuItem,
        MatMenuTrigger,
        MatCardActions,
        MatButton,
        MatCardImage,
        NgOptimizedImage,
        MatCardFooter,
        FormatDatePipe,
        InstagramMediaComponent,
        MatProgressBar
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{



  private instagramService = inject(InstagramService);
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
