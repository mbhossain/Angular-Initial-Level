import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CustomerService{
  constructor(private clint: HttpClient) {
  }
  getCustomer():Observable<any>{
    return this.clint.get('/assets/customer.json')
  }
}
