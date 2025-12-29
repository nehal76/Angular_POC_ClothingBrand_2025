import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 
    console.log("Service call");
    
  }

  getProducts(){
    return[
     {
      name: 'Men\'s Wear',
      image: 'Mens_wear.webp',
      
    },
    {
      name: 'Women\'s Wear',
      image: 'womens.jfif'
    },
    {
      name: 'Kids\' Wear',
      image: 'kids_wear.jpg'
    },
    {
      name: 'Accessories',
      image: 'Accessories.jpg'
    },
    {
      name: 'Footwear',
      image: 'Footwear_1.jpg'
    },
    {
      name: 'Ethnic Wear',
      image: 'Ethnic_Wear_1.jpg'
    }
    ]
  }

  fetchProducts(){
    return this.http.get('https://fake-json-api.mock.beeceptor.com/users')
  }
}
