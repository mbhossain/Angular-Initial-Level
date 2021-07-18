import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataShowComponent } from './components/data-show-component/data-show.component';
import { ExcelsheetComponent } from './components/excelsheet/excelsheet.component';

const routes: Routes = [
  {
    path: 'file-loader',
    component: ExcelsheetComponent
  },
  {
    path: 'data-show',
    component: DataShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExcelReaderRoutingModule { }
