import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public name = "Mohammad Belal";
  public message = "I want stop wast time forever my life...";
  public person = {
    name: "Marium Mahasanat Sara Atri",
    age: 1,
    district: "kushtia"
  }

  public date = new Date();

  constructor() {
  }
}

