import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExcelsheetComponent} from './excelsheet/excelsheet.component';
import {DataShowComponent} from './data-show-component/data-show.component';


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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
