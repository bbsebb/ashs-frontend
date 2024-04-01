import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Media} from "../models/media";

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http:HttpClient) { }

  getMedias(): Observable<Media[]> {
    return this.http.get<Media[]>('http://localhost:8080/instagram-service/api/media');
  }
}
