// components
import { Component, OnInit } from '@angular/core';

// interfaces
import { Product }           from './../../../../interfaces/product';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: Product;

  constructor() {}

  ngOnInit() {}
}
