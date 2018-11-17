import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PaginationModule } from '../exportComponents/pagination/pagination.module';
import { ListFilmsModule } from '../exportComponents/list-films/list-films.module';
import { PopupModule } from '../exportComponents/popup/popup.module';
import { FiltersModule } from '../exportComponents/filters/filters.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PaginationModule,
    ListFilmsModule,
    PopupModule,
    FiltersModule,
  ],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
