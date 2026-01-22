import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { map, shareReplay } from 'rxjs';
import { Observable,tap } from 'rxjs';

export interface User {
  id: number;
  name: string;
  company: string;
  username: string;
  email: string;
  address: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  photo: string;
}

interface product {
  
id: number;
  name: string;
  price: number;
  image: string;
  imageUrl: string;
  category?: string;
  brand?: string;
  tags?: string[];

}

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private baseUrl = 'http://localhost:3000/products'
  constructor(private http: HttpClient) {}

  fetchApiData() {
    return this.http.get<User[]>(
      'https://fake-json-api.mock.beeceptor.com/users',
    );
  }

  mobilePhoneData() {
    return this.http.get('https://api.restful-api.dev/objects');
    console.log('api call from API Service', this.mobilePhoneData());
  }

  anOtherApiCall() {
    return this.http.get('https://api.restful-api.dev/objects');
    console.log('another api icalling from', this.anOtherApiCall);
  }

  postApiCall() {
    return this.http.delete('http://localhost:3000/posts');
  }

  menApiCall(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/products').pipe(
      tap(()=> console.log('[API] data is coming from menAPICall')),
      map(res => res ?? []),
      shareReplay(1),
    )
    
  }
  menPosterApiCall() {
    return this.http.get('http://localhost:3000/posters');
  }

  womenProductApiCall() {
    return this.http.get('http://localhost:3000/women_products_list').pipe(
      tap(()=> console.log("Wome [API] data is coming")),map(res => res ?? []),
      shareReplay(1)
    );
  }
  womenPosterApiCall() {
    return this.http.get('http://localhost:3000/women_poster');
  }

  
getall(): Observable<any[]> {
    return this.http.get<{ products: any[] }>(`${this.baseUrl}`).pipe(
      tap(() => console.log('[API] products called', this.baseUrl)),
      map(res => res?.products ?? []),
      shareReplay(1),
      
    );
  }

}
