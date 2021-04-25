import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class LoginService{
 constructor(private httpClint: HttpClient) {
 }
  login(username: string, password: string): Observable<any>{
    return this.httpClint.post<any>('http://localhost:8080/login', {"username": username, 'password': password});
  }
}
