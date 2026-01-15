import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { APIService } from '../../Service/api.service';

@Component({
  selector: 'app-women-section',
  imports: [CommonModule],
  templateUrl: './women-section.component.html',
  styleUrl: './women-section.component.css'
})
export class WomenSectionComponent {


  womenProductList: any;
  womenPoster: any;
  constructor(private women: APIService){

  }

  ngOnInit(){
    this.women.womenProductApiCall().subscribe((data)=>{
      this.womenProductList = data;
      console.log("Women Product Data is fetching", data);
      
    })
    this.women.womenPosterApiCall().subscribe((data)=>{
      this.womenPoster = data;
       console.log("Poster Data is fetching", data);
    })
  }

  addToCart(product: any) {
    console.log('add to cart is working', product);
  }
  viewDetailsOfProduct(product: any){
    console.log("view the details", product);
  }

}
