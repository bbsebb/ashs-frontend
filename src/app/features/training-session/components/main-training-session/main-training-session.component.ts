import {Component, inject, signal, WritableSignal} from '@angular/core';
import {
  ViewTrainingSessionsComponent
} from "@app/features/training-session/components/main-training-session/view-training-sessions/view-training-sessions.component";
import {ITrainingSessionService, TRAINING_SESSION_SERVICE} from "@app/share/services/i-training-session.service";
import {PaginatedResource} from "@app/share/models/hal-forms/paginated-resource";
import {PageEvent} from "@angular/material/paginator";
import {TrainingSession} from "@app/share/models/training-session";

@Component({
  selector: 'app-main-training-session',
  imports: [
    ViewTrainingSessionsComponent
  ],
  templateUrl: './main-training-session.component.html',
  styleUrl: './main-training-session.component.scss'
})
export class MainTrainingSessionComponent {
  trainingSessionService: ITrainingSessionService = inject(TRAINING_SESSION_SERVICE);
  paginatedResource: WritableSignal<PaginatedResource<TrainingSession>> = signal(new PaginatedResource<TrainingSession>());
  constructor() {
    this.getTrainingSessions();
  }

  getTrainingSessions() {
    this.trainingSessionService.getTrainingSessions(0,20,['timeSlot_dayOfWeek,asc']).subscribe(trainingSessions => {
      this.paginatedResource.set(trainingSessions);
    })
  }

  handlePageEvent($event: PageEvent) {
    this.trainingSessionService.getTrainingSessions($event.pageIndex, $event.pageSize).subscribe(trainingSessions => {
      this.paginatedResource.set(trainingSessions);
    } );
  }
}
