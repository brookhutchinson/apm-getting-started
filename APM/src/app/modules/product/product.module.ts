// modules
import { NgModule }               from '@angular/core';

// shared modules
import { SharedModule }           from './../shared/shared.module';

// components
import { ProductListComponent }   from './components/product-list/product-list.component';

@NgModule({
  // modules
  imports: [
    // shared modules
    SharedModule
  ],
  declarations: [
    // components
    ProductListComponent
  ],
  // exports
  exports: [
    // components
    ProductListComponent
  ]
})
export class ProductModule {}