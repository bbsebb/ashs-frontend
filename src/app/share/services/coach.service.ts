import {inject, Injectable} from '@angular/core';
import {environment} from "@environments/environment";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {map} from "rxjs/operators";
import {mapPaginatedModel, PaginatedModel} from "../models/hal-forms/paginated-model";
import {Coach} from "../models/coach";
import {PaginatedResource} from "../models/hal-forms/paginated-resource";
import {ErrorHandlingService} from "./error-handling.service";
import {ICoachService} from "./i-coach.service";


@Injectable({
  providedIn: 'root'
})
export class CoachService implements ICoachService {
  private http: HttpClient = inject(HttpClient);
  private errorService: ErrorHandlingService = inject(ErrorHandlingService)
  private apiUrl = `${environment.apiUrl}/training-service/coaches`;


  getCoaches(page = 0, size = 10, sort:string[] = []): Observable<PaginatedResource<Coach>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    for (let s of sort) {
      params = params.append('sort', s);
    }
    return this.http.get<PaginatedModel<Coach>>(this.apiUrl, {params}).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(() => error);
      }),
      map(paginatedModel => mapPaginatedModel(paginatedModel, Coach)),
      map(paginatedModel => new PaginatedResource<Coach>(paginatedModel)),
    );
  }


}
