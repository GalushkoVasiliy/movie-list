import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import {FunctionsService} from '../../services/functions/functions.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PopupComponent],
  exports: [PopupComponent],
  providers: [FunctionsService]
})
export class PopupModule { }
