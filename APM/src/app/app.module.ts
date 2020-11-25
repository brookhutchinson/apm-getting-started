// angular modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent }  from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule
  ],
  // components
  declarations: [ AppComponent ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
