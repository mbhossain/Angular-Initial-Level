import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login/components/login-component/login-component.component';

export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'customers',
        loadChildren: () => import('./login/login-routing.module').then(m=>m.LoginRoutingModule)
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponentComponent];
