import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RegistrationService{
  constructor(private httpClint: HttpClient) {
  }

  register(user: User): Observable<any>{
    return this.httpClint.post<any>('http://localhost:8080/register', user);
  }
}
