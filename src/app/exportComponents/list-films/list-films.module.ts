import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmsComponent } from './list-films.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListFilmsComponent],
  exports: [ListFilmsComponent]
})
export class ListFilmsModule { }
