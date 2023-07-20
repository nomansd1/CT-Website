import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://api-ct-common.azurewebsites.net/api/Email';

  constructor(private http: HttpClient) {}

  sendEmail(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
