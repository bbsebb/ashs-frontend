import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {environment} from "@environments/environment";
import {catchError, Observable, throwError} from "rxjs";
import {PaginatedResource} from "../models/hal-forms/paginated-resource";
import {mapPaginatedModel, PaginatedModel} from "../models/hal-forms/paginated-model";
import {map} from "rxjs/operators";
import {Hall} from "../models/hall";
import {ErrorHandlingService} from "./error-handling.service";
import {IHallService} from "./i-hall.service";

@Injectable({
  providedIn: 'root'
})
export class HallService implements IHallService {

  private http: HttpClient = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/training-service/halls`;
  private errorService = inject(ErrorHandlingService);


  getHalls(page = 0, size = 10, sort:string[] = []): Observable<PaginatedResource<Hall>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    for (let s of sort) {
      params = params.append('sort', s);
    }
    return this.http.get<PaginatedModel<Hall>>(this.apiUrl, {params}).pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(() => error);
      }),
      map(paginatedModel => mapPaginatedModel(paginatedModel, Hall)),
      map(paginatedModel => new PaginatedResource<Hall>(paginatedModel)),
    );
  }


}
