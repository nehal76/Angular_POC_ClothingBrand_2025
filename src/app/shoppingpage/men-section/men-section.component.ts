import { Component } from '@angular/core';
import { APIService } from '../../Service/api.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-men-section',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './men-section.component.html',
  styleUrl: './men-section.component.css',
})
export class MenSectionComponent {
  products: any[] = [];
  poster: any;

  constructor(public product: APIService) {}

  menProductApiCall() {
    // this.product.menApiCall().subscribe((data:any)=>{
    //   this.products = data
    //   console.log("product data is coming succesfully", data);
    // })
  }
  ngOnInit() {
   this.loadData();
  }

  loadData() {
    this.product.menPosterApiCall().subscribe((data: any) => {
      this.poster = data;
      console.log('poster API Call', data);
    });
    this.product.menApiCall().subscribe((data: any) => {
      this.products = data;
      console.log('product data is coming succesfully', data);
    });
  }

  

  addToCart(product: any) {
    console.log('add to cart is working', product);
  }
  viewDetailsOfProduct(product: any){
    console.log("view the details", product);
  }
}
