import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angular10AnilComponent } from './components/angular10-anil/angular10-anil.component';

export const routes: Routes = [
  {
    path: 'angular10-anil',
    component: Angular10AnilComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
