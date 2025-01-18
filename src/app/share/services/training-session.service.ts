import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {environment} from "@environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {PaginatedResource} from "../models/hal-forms/paginated-resource";

import {mapPaginatedModel, PaginatedModel} from "../models/hal-forms/paginated-model";
import {map} from "rxjs/operators";
import {TrainingSession} from "../models/training-session";
import {ErrorHandlingService} from "./error-handling.service";
import {ITrainingSessionService} from "./i-training-session.service";


@Injectable({
  providedIn: 'root'
})
export class TrainingSessionService implements ITrainingSessionService {
  private errorService: ErrorHandlingService = inject(ErrorHandlingService)
  private http: HttpClient = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/training-service/trainingSessions`;


  getTrainingSessions(page = 0, size = 10, sort:string[]  = []): Observable<PaginatedResource<TrainingSession>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    for (let s of sort) {
      params = params.append('sort', s);
    }
    return this.http.get<PaginatedModel<TrainingSession>>(this.apiUrl, {params}).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(() => error);
      }),
      map(paginatedModel => mapPaginatedModel(paginatedModel, TrainingSession)),
      map(paginatedModel => new PaginatedResource<TrainingSession>(paginatedModel)),
    );
  }



}
