// angular modules
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

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
    // pipes
    ConvertToSpacesPipe
  ],
  // exports
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    // pipes
    ConvertToSpacesPipe
  ]
})
export class SharedModule {}
