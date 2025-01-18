import {Component, inject, input, InputSignal, output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {HallCardDialogComponent} from "@app/features/halls/components/hall-card-dialog/hall-card-dialog.component";
import {ConfirmDialogComponent} from "@app/share/components/dialog/confirm-dialog.component";
import {Resource} from "@app/share/models/hal-forms/resource";
import {TrainingSession} from "@app/share/models/training-session";
import {DayOfWeekPipe} from "@app/share/pipes/day-of-week.pipe";
import {TimePipe} from "@app/share/pipes/time.pipe";
import {DurationPipe} from "@app/share/pipes/duration.pipe";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-training-session-card',
  imports: [
    DayOfWeekPipe,
    TimePipe,
    DurationPipe,
    MatCardModule,
    MatButtonModule,
    MatIcon
  ],
    templateUrl: './training-session-card.component.html',
    styleUrl: './training-session-card.component.scss'
})
export class TrainingSessionCardComponent {
  dialog:MatDialog = inject(MatDialog);
  trainingSessionInputSignal: InputSignal<TrainingSession> = input.required<TrainingSession>({alias: 'trainingSession'});
  deleteTrainingSession= output<TrainingSession>({alias: 'deleteTrainingSession'});
  modifyTrainingSession= output<TrainingSession>({alias: 'modifyTrainingSession'});


  onModify() {
    this.modifyTrainingSession.emit(this.trainingSessionInputSignal());
  }

  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: 'Voulez-vous vraiment supprimer ce créneau ?',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteTrainingSession.emit(this.trainingSessionInputSignal());
      }
    });

  }

  openHallDialog() {
    this.dialog.open(HallCardDialogComponent, {
      data: this.trainingSessionInputSignal().hall, // On passe le hall à la modale
      width: '600px', // Ajuste la largeur selon tes besoins
    });
  }

  protected readonly Resource = Resource;
}
