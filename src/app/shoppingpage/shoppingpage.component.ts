import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from '../home/card/card.component';
import { ProductsService } from '../Service/products.service';

@Component({
  selector: 'app-shoppingpage',
  imports: [CommonModule, CardComponent, NgIf, NgFor],
  templateUrl: './shoppingpage.component.html',
  styleUrl: './shoppingpage.component.css',
})
export class ShoppingpageComponent {

  isLogin: boolean = true;

  @Input() product: any;
  ngOnInit() {
    console.log('Received products:', this.product);
  }
  constructor(private ProductsService: ProductsService){
    console.log("Service calling From Shopping Page");
  }

  productData: any;
  getProductsScreen() {
    this.productData = this.ProductsService.getProducts();
    console.log('products from home', this.productData);
  }
}
