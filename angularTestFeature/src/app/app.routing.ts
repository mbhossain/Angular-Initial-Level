import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'customers',
        loadChildren: () => import('./modules/customers/customer.module').then(m=>m.CustomerModule)
      },
      {
        path: 'fetch-data-http',
        loadChildren: () => import('./modules/fetch-data-http/fetch-data-http.module').then(m=>m.FetchDataHttpModule)
      },
      {
        path: 'excel-reader',
        loadChildren: () => import('./modules/excel-reader/excel-reader.module').then(m=>m.ExcelReaderModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
