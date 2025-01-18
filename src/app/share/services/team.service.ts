import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {environment} from "@environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {PaginatedResource} from "../models/hal-forms/paginated-resource";
import {mapPaginatedModel, PaginatedModel} from "../models/hal-forms/paginated-model";
import {map} from "rxjs/operators";
import {Team} from "../models/team";
import {ErrorHandlingService} from "./error-handling.service";
import {ITeamService} from "./i-team.service";

@Injectable({
  providedIn: 'root'
})
export class TeamService implements ITeamService {
  private errorService: ErrorHandlingService = inject(ErrorHandlingService)
  private http: HttpClient = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/training-service/teams`;


  getTeams(page = 0, size = 10, sort:string[] = []): Observable<PaginatedResource<Team>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    for (let s of sort) {
      params = params.append('sort', s);
    }
    return this.http.get<PaginatedModel<Team>>(this.apiUrl, {params}).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(() => error);
      }),
      map(paginatedModel => mapPaginatedModel(paginatedModel, Team)),
      map(paginatedModel => new PaginatedResource<Team>(paginatedModel)),
    );
  }

}
