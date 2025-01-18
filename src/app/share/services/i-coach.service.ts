import {Observable} from "rxjs";
import {PaginatedResource} from "../models/hal-forms/paginated-resource";
import {Coach} from "../models/coach";
import {InjectionToken} from "@angular/core";

export const COACH_SERVICE = new InjectionToken<ICoachService>('coach.service');

export interface ICoachService {
    getCoaches(page?:number, size?:number, sort?:string[]): Observable<PaginatedResource<Coach>>;


}
