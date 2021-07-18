import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataShowStateService {
  private data: BehaviorSubject<any[][]> = new BehaviorSubject<any[][]>([]);

  constructor() {
    this.data.asObservable();
  }

  setData(values: any[][]): void{
    this.data.next(values);
  }

  getData(): Observable<any[][]> {
    return this.data;
  }
}
