import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchDataHttpRoutingModule } from './fetch-data-http-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { TimePickerComponent } from './components/time-picker/time-picker.component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent, TimePickerComponent],
  imports: [
    CommonModule,
    FetchDataHttpRoutingModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ]
})
export class FetchDataHttpModule { }
