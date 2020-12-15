// components
import { Component, OnInit } from '@angular/core';

// interfaces
import { Product }           from './../../../../interfaces/product';

// services
import { ProductService }    from './../../../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  // backing property
  private _filterText: string;
  get filterText(): string {
    return this._filterText;
  }
  set filterText(value: string) {
    this._filterText = value;

    // if there is a value for filterText then apply filter and display filtered products
    // if there is no value for filterText then display all products
    this.filteredProducts = this.filterText ? this.performFilter(this.filterText) : this.products;
  }

  // filtered products
  filteredProducts: Product[];

  // original products
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // retrieve products
    this.products = this.productService.getProducts()

    // set filtered products to original products
    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string) {
    // set page title value to include message passed from StarComponent event
    this.title = 'Product List: ' + message;
  }

  performFilter(filterText: string): Product[] {
    // convert filterText to lowercase
    filterText = filterText.toLocaleLowerCase();

    // goal: create create array of filtered products
    // 1) for each product in the products array check whether the filterText exists inside the productName
    // 2) if filterText exists inside productName then add product to array of filtered products
    // 3) return array of filtered products
    return this.products.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterText) !== -1);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
