import {Component, input, InputSignal, output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Coach} from "@app/share/models/coach";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-coach-card',
    imports: [
        MatCardModule,
        MatButtonModule,
        MatIcon
    ],
    templateUrl: './coach-card.component.html',
    styleUrl: './coach-card.component.scss'
})
export class CoachCardComponent {
  coachInputSignal: InputSignal<Coach> = input.required<Coach>({alias: 'coach'});
  deleteCoach= output<Coach>({alias: 'deleteCoach'});
  modifyCoach= output<Coach>({alias: 'modifyCoach'});




  onModify() {
    this.modifyCoach.emit(this.coachInputSignal());
  }

  onDelete() {
    this.deleteCoach.emit(this.coachInputSignal());
  }
}
