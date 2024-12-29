import {Component, computed, Inject, Input, Optional, Signal, signal, WritableSignal} from '@angular/core';
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
        NgOptimizedImage
    ],
    templateUrl: './instagram-media.component.html',
    styleUrl: './instagram-media.component.scss'
})
export class InstagramMediaComponent {
  @Input() media!: Media;
  activeSlideIndex:WritableSignal<number> = signal(0);
  showNextControl:Signal<boolean> = computed(() => this.activeSlideIndex() < this.media.children.length - 1)
  showPrevControl:Signal<boolean> = computed(() => this.activeSlideIndex() > 0)
  isDialog:boolean = false;

  constructor(private dialog:MatDialog,@Optional()@Inject(MAT_DIALOG_DATA) public data: Media) {
    if(data) {
      this.media = data;
      this.isDialog = true;
    }
  }

  prevSlide() {
    this.activeSlideIndex.update(index => index - 1 < 0 ? this.media.children.length - 1 : index - 1);
  }

  nextSlide() {
    this.activeSlideIndex.update(index => index + 1 >= this.media.children.length ? 0 : index + 1);
  }

  openDialog() {
    this.dialog.open(InstagramMediaComponent, {data:this.media, panelClass:'instagram-card-dialog'});
  }

}
