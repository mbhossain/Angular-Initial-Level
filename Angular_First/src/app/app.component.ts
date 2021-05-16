import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

public readonly title = 'angular';

  public name = "Mohammad Belal";
  public message = "I want stop wast time forever my life...";

  public date = new Date();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    var person: Person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    const personObs: Observable<any> = of(person);
    personObs.subscribe(data => console.log(data));
  }
}

