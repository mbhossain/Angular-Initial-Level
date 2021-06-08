import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchDataHttpModule } from './modules/fetch-data-http/fetch-data-http.module';
import {AppRouting} from './app.routing'
import { EmployeeService } from './modules/fetch-data-http/services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FetchDataHttpModule,
    AppRouting
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
