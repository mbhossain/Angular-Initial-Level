import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../../storage.service';

@Injectable({providedIn: 'root'})
export class UserUpdateService{
  constructor(private httpClint: HttpClient, private storageservice: StorageService) {
  }
  userupdate(firstName: string, lastName: string): Observable<any>{
    const username = this.getUserName();
    return this.httpClint.post<any>('http://localhost:8080/update-user', {"username": username, "firstname": firstName, 'lastname': lastName});
  }

  getUserName(){
    return this.storageservice.getUserName();
  }
}
