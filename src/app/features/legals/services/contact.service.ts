import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

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
    return this.http.post('http://localhost:8080/contact-service/sendEmail', data)
      ;
  }
}
