import {Component, inject, signal, WritableSignal} from '@angular/core';
import {ViewCoachesComponent} from "@app/features/coachs/components/main-coaches/view-coaches/view-coaches.component";
import {PaginatedResource} from "@app/share/models/hal-forms/paginated-resource";
import {Coach} from "@app/share/models/coach";
import {COACH_SERVICE, ICoachService} from "@app/share/services/i-coach.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-main-coachs',
  imports: [
    ViewCoachesComponent
  ],
  templateUrl: './main-coachs.component.html',
  styleUrl: './main-coachs.component.scss'
})
export class MainCoachsComponent {
  coachService: ICoachService = inject(COACH_SERVICE);
  paginatedResourceSignal: WritableSignal<PaginatedResource<Coach>> = signal(new PaginatedResource<Coach>());

  constructor() {
    this.getCoaches();
  }

  getCoaches() {
    this.coachService.getCoaches().subscribe(coaches => {
      this.paginatedResourceSignal.set(coaches);
    })
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.coachService.getCoaches(pageEvent.pageIndex, pageEvent.pageSize).subscribe(coaches => {
      this.paginatedResourceSignal.set(coaches);
    } );
  }

}
