import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'fetch-data-http',
        loadChildren: () => import('./modules/fetch-data-http/fetch-data-http.module').then(m=>m.FetchDataHttpModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}
