import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BjaPaginationModule } from 'bja-ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxPaginationModule,
    BjaPaginationModule
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
