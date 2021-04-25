import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class StudentService{
  constructor(private client: HttpClient) {
  }

  getStudents(): Observable<any>{
    return this.client.get('/assets/student.json');
  }
}
