import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';


export interface User {

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

  mobilePhoneData(){
    return this.http.get('https://api.restful-api.dev/objects');
    console.log("api call from API Service", this.mobilePhoneData());
    
  }

  anOtherApiCall(){
    return this.http.get('https://api.restful-api.dev/objects');
    console.log("another api icalling from", this.anOtherApiCall);
  }

  postApiCall(){
    return this.http.delete('http://localhost:3000/posts');
  }

  menApiCall(){
    return this.http.get('http://localhost:3000/products');
  }
  menPosterApiCall(){
    return this.http.get('http://localhost:3000/posters');
  }

  womenProductApiCall(){
    return this.http.get('http://localhost:3000/women_products_list');
  }
  womenPosterApiCall(){
    return this.http.get('http://localhost:3000/women_poster');
  }



}
