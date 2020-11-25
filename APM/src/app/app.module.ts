// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

// components
import { AppComponent }  from './app.component';

@NgModule({
  // modules
  imports: [
    // angular modules
    BrowserModule
  ],
  // components
  declarations: [
    AppComponent
  ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}
