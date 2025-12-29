import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AboutComponent } from '../about/about.component';
import { ProductsService } from '../Service/products.service';
import { LoginService } from '../Service/login.service';
import { APIService } from '../Service/api.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  loginCount: number = 0;

  //Service Call code
  constructor(
    private apiservice: APIService,
    private productsService: ProductsService,
    public loginService: LoginService,
    private router: Router,
    
    
    
  ) {
    console.log('Hello service!!!');
  }

  productData: any;

  data: any;

  // getProductsScreen(){
  //   this.productData = this.productsService.getProducts();
  //   console.log("products from home",this.productData);
  // }

  //end Service call code--

  

  fetchDataUsingApi() {
    this.apiservice.fetchApiData().subscribe((data) => {
      this.data = data;
      console.log('Data is coming from API service not Product service');
    });
  }


  
  

  // dataFetch(){
  //   this.apiservice.
  // }


  homeMessage = signal('Hello, This comes from Home!!!');
}
