// angular modules
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

// components
import { StarComponent }       from './components/star/star.component';

// pipes
import { ConvertToSpacesPipe } from './pipes/convert-to-spaces.pipe';

@NgModule({
  // modules
  imports: [
    // angular modules
    CommonModule,
    FormsModule
  ],
  // components
  declarations: [
    // components
    StarComponent,
    // pipes
    ConvertToSpacesPipe
  ],
  // exports
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    // components
    StarComponent,
    // pipes
    ConvertToSpacesPipe
  ]
})
export class SharedModule {}
