import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { BjaPaginationModule } from 'bja-ngx-pagination';
import { BankService } from '../../services/bank/bank.service';

@NgModule({
  imports: [
    CommonModule,
    BjaPaginationModule
  ],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [BankService]
})
export class PaginationModule { }
