import {Component, inject, signal, WritableSignal} from '@angular/core';
import {ViewTeamsComponent} from "@app/features/teams/components/main-teams/view-teams/view-teams.component";
import {PaginatedResource} from "@app/share/models/hal-forms/paginated-resource";
import {Team} from "@app/share/models/team";
import {ITeamService, TEAM_SERVICE} from "@app/share/services/i-team.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-main-teams',
  imports: [
    ViewTeamsComponent
  ],
  templateUrl: './main-teams.component.html',
  styleUrl: './main-teams.component.scss'
})
export class MainTeamsComponent {
  teamService: ITeamService = inject(TEAM_SERVICE);
  paginatedResource: WritableSignal<PaginatedResource<Team>> = signal(new PaginatedResource<Team>());
  constructor() {
    this.getTeams();
  }

  getTeams() {
    this.teamService.getTeams().subscribe(teams => {
      this.paginatedResource.set(teams);
    })
  }

  handlePageEvent($event: PageEvent) {
    this.teamService.getTeams($event.pageIndex, $event.pageSize).subscribe(teams => {
      this.paginatedResource.set(teams);
    } );
  }
}
