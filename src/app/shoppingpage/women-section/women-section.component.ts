import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { APIService } from '../../Service/api.service';
import { SearchserviceService } from '../../Service/searchservice.service';

@Component({
  selector: 'app-women-section',
  imports: [CommonModule],
  templateUrl: './women-section.component.html',
  styleUrl: './women-section.component.css',
})
export class WomenSectionComponent {
  womenProductList: any[] = [];
  searchProduct: any[] = [];
  womenPoster: any;
  constructor(
    private women: APIService,
    private search: SearchserviceService,
  ) {}

  ngOnInit() {
    this.search.query$.subscribe((data) => {
      console.log('WOMEN PAGE Search:', data);

      if (!data) {
        this.womenProductList = this.searchProduct;
        return;
      }

      this.womenProductList = this.searchProduct.filter((item) =>{
        const searchText = ` ${item.name} ${item.category} ${item.price}`.toLowerCase();
        return searchText.includes(item.toLowerCase());
      }
        
      );
    });

    this.loadData();
  }

  loadData() {
    this.women.womenProductApiCall().subscribe((data:any) => {
      this.womenProductList = data;
      this.searchProduct = data;
      console.log('Women page search', data);
    });
    this.women.womenPosterApiCall().subscribe((data) => {
      this.womenPoster = data;

      console.log('Poster Data is fetching', data);
    });
  }

  addToCart(product: any) {
    console.log('add to cart is working', product);
  }
  viewDetailsOfProduct(product: any) {
    console.log('view the details', product);
  }
}
