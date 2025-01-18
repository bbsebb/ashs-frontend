import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Hall} from "@app/share/models/hall";
import {HallCardComponent} from "@app/features/halls/components/main-hall/hall-card/hall-card.component";

@Component({
    selector: 'app-hall-card-dialog',
  imports: [
    HallCardComponent
  ],
    templateUrl: './hall-card-dialog.component.html',
    styleUrl: './hall-card-dialog.component.scss'
})
export class HallCardDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public hall: Hall) {
    this.hall = new Hall(hall);
  }


}
