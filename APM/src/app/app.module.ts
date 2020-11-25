// angular modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// feature modules
import { HomeModule }    from './modules/home/home.module';
import { ProductModule } from './modules/product/product.module';

// components
import { AppComponent }  from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule,
    // feature modules
    HomeModule, ProductModule
  ],
  // components
  declarations: [ AppComponent ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
