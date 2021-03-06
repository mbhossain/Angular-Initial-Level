import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent},
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  { path: 'employees', component: EmployeeListComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
// export const routingComponents = [
//   EmployeeListComponent,
//   DepartmentListComponent,
//   DepartmentDetailComponent,
//   DepartmentOverviewComponent,
//   DepartmentContactComponent,
//   PageNotFoundComponent
// ]
