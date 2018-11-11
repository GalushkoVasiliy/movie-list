import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BankService } from './services/bank/bank.service';
import { QueriesService } from './services/queries/queries.service';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './services/interceptor/http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ BankService, QueriesService, httpInterceptorProviders ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
