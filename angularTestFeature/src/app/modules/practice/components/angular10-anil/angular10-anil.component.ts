import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular10-anil',
  templateUrl: './angular10-anil.component.html',
  styleUrls: ['./angular10-anil.component.css']
})
export class Angular10AnilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fatherName = "Motaleb Mridha"
  // getName(){
  //   alert('Mohammad Belal')
  // }
  getName(nameOfMyWife){
    alert(nameOfMyWife)
  }

myEvent(evn){
  console.warn(evn)
}

}
