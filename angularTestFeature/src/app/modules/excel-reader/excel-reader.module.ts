import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcelReaderRoutingModule } from './excel-reader-routing.module';
import { ExcelsheetComponent } from './components/excelsheet/excelsheet.component';
import { DataShowComponent } from './components/data-show-component/data-show.component';


@NgModule({
  declarations: [ExcelsheetComponent, DataShowComponent],
  imports: [
    CommonModule,
    ExcelReaderRoutingModule
  ]
})
export class ExcelReaderModule { }
