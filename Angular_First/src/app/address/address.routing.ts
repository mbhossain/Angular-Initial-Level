import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddressComponent} from "./address.component";

export const routes: Routes = [
  {
    path: '',
    component: AddressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRouting {
}
