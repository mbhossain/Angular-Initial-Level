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

  // call function
  // fatherName = "Motaleb Mridha"
  // getName(){
  //   alert('Mohammad Belal')
  // }
  // getName(nameOfMyWife) {
  //   alert(nameOfMyWife)
  // }

  // implement event
  // myEvent(evn) {
  //   console.warn(evn)
  // }

  // get input box value
  // currentVal = "belal"
  // getVal(val) {
  //   console.log(val);
  //   console.log(val.value);
  //   this.currentVal = val.value;
  // }

  // property binding
  name = "Mohammad belal"
  disableBox = true
  enableBox() {
    this.disableBox = false
  }

}
