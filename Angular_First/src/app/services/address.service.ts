import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AddressService {
  constructor(private client: HttpClient) {
  }

  getAddresses(): Observable<any>{
    return this.client.get('/assets/address.json');
  }
}
