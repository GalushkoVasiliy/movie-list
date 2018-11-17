import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FiltersComponent],
  exports: [FiltersComponent]
})
export class FiltersModule { }
