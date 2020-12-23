// modules
import { NgModule }               from '@angular/core';
import { RouterModule }           from '@angular/router';
import { Routes }                 from '@angular/router';

// components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent }   from './components/product-list/product-list.component';

// define routes
const routes: Routes = [
  // product list route
  { path: 'products', component: ProductListComponent },
  // product detail route
  { path: 'products/:id', component: ProductDetailComponent }
];

@NgModule({
  // imports
  imports: [ RouterModule.forChild(routes) ],
  // exports
  exports: [ RouterModule ]
})
export class ProductRoutingModule {}