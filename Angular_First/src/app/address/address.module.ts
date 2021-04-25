import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressComponent} from "./address.component";
import {AddressRouting} from "./address.routing";
import {AddressService} from "../services/address.service";

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    AddressRouting
  ],
  providers: [
    AddressService
  ]
})
export class AddressModule { }
