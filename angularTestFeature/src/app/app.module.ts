import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataHttpModule } from './modules/fetch-data-http/fetch-data-http.module';
import {AppRouting} from './app.routing'
import { EmployeeService } from './modules/fetch-data-http/services/employee.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerModule } from './modules/customers/customer.module';
import { CustomerService } from './modules/customers/services/customer.service';
import { ExcelReaderModule } from './modules/excel-reader/excel-reader.module';
import { DataShowStateService } from './modules/excel-reader/services/data-show-state.service';
import { RoutingModule } from './modules/routing/routing.module';
import { PracticeModule } from './modules/practice/practice.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FetchDataHttpModule,
    AppRouting,
    BrowserAnimationsModule,
    CustomerModule,
    ExcelReaderModule,
    RoutingModule,
    PracticeModule
  ],
  providers: [
    EmployeeService,
    CustomerService,
    DataShowStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
