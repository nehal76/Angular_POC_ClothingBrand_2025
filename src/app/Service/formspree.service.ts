import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {

  constructor(private http: HttpClient) { }

formsData(payload: any) {
    return this.http.post('https://formspree.io/f/mojedlev', payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

}
