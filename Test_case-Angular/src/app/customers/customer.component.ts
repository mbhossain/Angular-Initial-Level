import {Component, OnInit} from "@angular/core";
import {Customer} from "../model/customer";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customer',
  template: ``
})
export class CustomerComponent implements OnInit{
  customer: Customer[]=[];
  constructor(private customerService : CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(
      res => this.customer = res,
      error => console.log(error)
    );
  }
}
