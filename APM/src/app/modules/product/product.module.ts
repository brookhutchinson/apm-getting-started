// modules
import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

// feature routing module
import { ProductRoutingModule } from './product-routing.module';

// shared modules
import { SharedModule }         from './../shared/shared.module';

// components
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    RouterModule,
    // feature routing module
    ProductRoutingModule,
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