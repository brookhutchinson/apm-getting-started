// angular modules
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// feature modules
import { HomeModule }       from './modules/home/home.module';
import { ProductModule }    from './modules/product/product.module';

// components
import { AppComponent }     from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule, HttpClientModule,
    // feature modules
    HomeModule, ProductModule
  ],
  // components
  declarations: [ AppComponent ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
