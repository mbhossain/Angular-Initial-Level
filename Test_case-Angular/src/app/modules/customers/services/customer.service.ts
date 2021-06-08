import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ICustomer } from "../cusromer";

@Injectable()
export class CustomerService{
  private _url: string="/assets/data/customer.json";
  constructor(private clint: HttpClient) {
  }
  getCustomer():Observable<any>{
    return this.clint.get('/assets/customer.json')
  }
  getCustomerList():Observable<ICustomer[]>{
    return this.clint.get<ICustomer[]>(this._url);
  }
}
