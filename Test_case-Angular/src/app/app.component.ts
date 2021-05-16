import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular ';
  age = 17;

  // data = ["Motaleb", "Khadeja", "Belal", "Sadia", "Atri"];
  data = [
    {
      name: 'Motaleb',
      age: 56

    },
    {
      name: 'Khadeja',
      age: 50

    },
    {
      name: 'Belal',
      age: 32

    },
    {
      name: 'Sadia',
      age: 25

    },
    {
      name: 'Atri',
      age: 1

    }
  ];
}
