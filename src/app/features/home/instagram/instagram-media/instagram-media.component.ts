import {
  Component,
  computed,
  effect, inject,
  Inject,
  input,
  Input,
  Optional,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {FormatDatePipe} from "../../../../share/pipes/format-date.pipe";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

import {Media} from "../../../../share/models/media";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {TruncatePipe} from "../../../../share/pipes/truncate.pipe";
import {NgOptimizedImage} from "@angular/common";


@Component({
    selector: 'app-instagram-media',
    imports: [
        FormatDatePipe,
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardImage,
        MatIcon,
        MatIconButton,
        TruncatePipe,
    ],
  standalone: true,
    templateUrl: './instagram-media.component.html',
    styleUrl: './instagram-media.component.scss'
})
export class InstagramMediaComponent {

  private readonly dialog = inject(MatDialog);

  media = input.required<Media>();

  mediaLength = computed(() => this.media().children ? this.media().children!.length : 0);
  activeSlideIndex:WritableSignal<number> = signal(0);
  showNextControl:Signal<boolean> = computed(() => this.activeSlideIndex() < this.mediaLength() - 1)
  showPrevControl:Signal<boolean> = computed(() => this.activeSlideIndex() > 0)
  isDialog:boolean = false;


  prevSlide() {
    this.activeSlideIndex.update(value => value - 1);
  }

  nextSlide() {
    this.activeSlideIndex.update(value => value + 1);
  }

  openDialog() {
    const dialogRef = this.dialog.open(InstagramMediaComponent, {panelClass:'instagram-card-dialog'});
    dialogRef.componentInstance.media = this.media;
    dialogRef.componentInstance.isDialog = true;
  }

}
