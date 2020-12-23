// components
import { Component, OnInit } from '@angular/core';

// services
import { ActivatedRoute }   from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');

    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2019',
      'description': 'Leaf rake with 48-inch wooden handle',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png'
    }
  }
}
