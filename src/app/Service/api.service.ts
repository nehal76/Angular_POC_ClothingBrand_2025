import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';


export interface User {
  // "id": 1,
  //   "name": "Reuben Schimmel",
  //   "company": "Grady, Hauck and Wiza",
  //   "username": "Devin80",
  //   "email": "Bertram.Satterfield28@hotmail.com",
  //   "address": "977 Quarry Lane",
  //   "zip": "00532-9967",
  //   "state": "Kansas",
  //   "country": "Guernsey",
  //   "phone": "962-877-0832 x08761",
  //   "photo": "https://json-server.dev/ai-profiles/70.png

  id:number,
  name: string,
  company: string,
  username: string,
  email: string,
  address: string,
  zip : string,
  state : string,
  country : string,
  phone : string,
  photo : string,
}


@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  fetchApiData() {
    return this.http.get<User[]>('https://fake-json-api.mock.beeceptor.com/users');
  }
}
