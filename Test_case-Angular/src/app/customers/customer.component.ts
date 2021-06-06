import {Component, OnInit} from "@angular/core";
import {Customer} from "../model/customer";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customer',
  template: `<h2>Employee List</h2>`
})
export class CustomerComponent implements OnInit{
  customer: Customer[]=[];
  public employess=[];
  constructor(private customerService : CustomerService) {
  }

  ngOnInit(): void {
    this.getCustomer();
    this.customerService.getCustomerList().subscribe(resp=>this.employess=resp)
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(
      res => this.customer = res,
      error => console.log(error)
    );
  }
}
