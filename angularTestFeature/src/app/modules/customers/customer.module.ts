import {NgModule} from "@angular/core";
import {CustomerComponent} from "./customer.component";
import {CommonModule} from "@angular/common";
import {CustomerRouting} from "./customer.routing";

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRouting

  ]
})
export class CustomerModule {}
