import {Injectable, InjectionToken} from '@angular/core';
import {Observable} from "rxjs";
import {Media} from "@app/share/models/media";

export const INSTAGRAM_SERVICE = new InjectionToken<IInstagramService>('InstagramService');

export interface IInstagramService {
  getMedias(): Observable<Media[]>
}
