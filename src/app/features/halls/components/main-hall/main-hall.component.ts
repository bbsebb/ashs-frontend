import {Component, inject, signal, WritableSignal} from '@angular/core';
import {HALL_SERVICE, IHallService} from "@app/share/services/i-hall.service";
import {Hall} from "@app/share/models/hall";
import {PaginatedResource} from "@app/share/models/hal-forms/paginated-resource";
import {PageEvent} from "@angular/material/paginator";
import {ViewHallsComponent} from "@app/features/halls/components/main-hall/view-halls/view-halls.component";

@Component({
  selector: 'app-main-hall',
  imports: [
    ViewHallsComponent
  ],
  templateUrl: './main-hall.component.html',
  styleUrl: './main-hall.component.scss'
})
export class MainHallComponent {
  private hallService: IHallService = inject(HALL_SERVICE);


  paginatedResourceSignal: WritableSignal<PaginatedResource<Hall>> = signal(new PaginatedResource<Hall>());
  constructor() {
    this.getHalls();
  }

  getHalls() {
    this.hallService.getHalls().subscribe(halls => {
      this.paginatedResourceSignal.set(halls);
    })
  }

  handlePageEvent($event: PageEvent) {
    this.hallService.getHalls($event.pageIndex, $event.pageSize).subscribe(halls => {
      this.paginatedResourceSignal.set(halls);
    } );
  }

}
