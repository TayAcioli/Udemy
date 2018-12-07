import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productName = 'Book';
  isDisabled = true ;
  products = [];
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      // this.productName = 'Tree';
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct( form ) {
    // this.products.push(this.productName);
    if ( form.valid ) {
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string) {
    // Filter the array to remove every node that contains the product name
    this.products = this.products.filter(p => p !== productName);
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}
