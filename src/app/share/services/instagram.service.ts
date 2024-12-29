import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Media} from "../models/media";
import { environment } from '@environments/environment';
import {IInstagramService} from "@app/share/services/i-instagram.service";
@Injectable({
  providedIn: 'root'
})
export class InstagramService implements IInstagramService{

  constructor(private http:HttpClient) { }

  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>(`${environment.apiUrl}/instagram-service/api/media`);
  }
}

