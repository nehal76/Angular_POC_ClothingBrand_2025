import { Component } from '@angular/core';
import { APIService } from '../../Service/api.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SearchserviceService } from '../../Service/searchservice.service';
import { combineLatest, map, BehaviorSubject, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-men-section',
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './men-section.component.html',
  styleUrl: './men-section.component.css',
})
export class MenSectionComponent {
  products: any[] = [];
  poster: any;
  searchProduct: any[] = [];
  // results$: any;
  // all$!: Observable<any[]>;

  constructor(
    public product: APIService,
    public search: SearchserviceService,
  ) {}

  menProductApiCall() {
    // this.product.menApiCall().subscribe((data:any)=>{
    //   this.products = data
    //   console.log("product data is coming succesfully", data);
    // })
  }

  // ngOnInit() {
  //   console.log(" MEN: ngOnInit RUNNING");

  //   this.all$ = this.product.menApiCall().pipe(
  //     tap(p => console.log(" MEN: ALL PRODUCTS =", p))
  //   );

  //   this.results$ = combineLatest([
  //     this.all$,
  //     this.search.query$
  //   ]).pipe(
  //     tap(([products, query]) => {
  //       console.log(" MEN: QUERY =", query);
  //       console.log(" MEN: PRODUCTS BEFORE FILTER =", products.length);
  //     }),
  //     map(([products, query]) => {
  //       const t = (query || "").toLowerCase();
  //       if (!t) return products;
  //       return products.filter(p => p.name?.toLowerCase().includes(t));
  //     }),
  //     tap(filtered => {
  //       console.log(" MEN: FILTERED RESULTS =", filtered.length, filtered);
  //     })
  //   );

  //   this.loadData();
  // }

  ngOnInit() {
    this.loadData();

    this.search.query$.subscribe((q) => {
      console.log('MEN PAGE SEARCH:', q);

      if (!q) {
        this.products = this.searchProduct; // reset results
        return;
      }

      this.products = this.searchProduct.filter((item) => {
        const searchText =` ${item.name} ${item.category} ${item.price}`.toLowerCase();

        return searchText.includes(q.toLowerCase());
      });
    });
  }

  loadData() {
    this.product.menPosterApiCall().subscribe((data: any) => {
      this.poster = data;
      console.log('poster API Call', data);
    });
    this.product.menApiCall().subscribe((data: any) => {
      this.products = data;
      this.searchProduct = data;
      console.log('products data is coming succesfully', data);
    });
  }

  addToCart(product: any) {
    console.log('add to cart is working', product);
  }
  viewDetailsOfProduct(product: any) {
    console.log('view the details', product);
  }
}
