import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '@environments/environment';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  sendContactForm(data: ContactForm) {
    return this.http.post(`${environment.apiUrl}/contact-service/sendEmail`, data)
      ;
  }
}
