// component
import { Component, OnInit } from '@angular/core';

// services
import { ActivatedRoute }    from '@angular/router';
import { Router }            from '@angular/router';
import { ProductService }    from './../../../../services/product.service';

// interfaces
import { Product }           from './../../../../interfaces/product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit() {
    // get route paramater value
    const param = this.route.snapshot.paramMap.get('id');

    if (param) {
      // convert string to number
      const id = +param;

      // get product details for selected product
      this.getProduct(id);
    }
  }

  onBack() {
    // navigate to ProductListComponent
    this.router.navigate(['/products']);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      // on success
      (product) => this.product = product,
      // on error
      (errorObject) => this.errorMessage = errorObject.message
    );
  }
}