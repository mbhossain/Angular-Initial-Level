import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public timePicker;
  public timeValue = [];

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.timePicker = new FormGroup({
      time: new FormControl(''),
    })
    this.timePicker.setValue({
      time: '3:16'
    })
    this.timeValue = this.timePicker.get('time').value;

    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }



  getTime() {
    console.log(this.timePicker.value);

    // var newTime = this.timePicker.value;
    // console.log(newTime);
    //   var timeObject = this.timePicker.value;
    //   var timeString = timeObject.time;
    //   var stringSearch = timeString.includes("PM"); //return boolean
    //   // console.log(stringSearch);
    //   if (stringSearch == true) {
    //     let stringToNumber = parseInt(timeObject.time);
    //     stringToNumber += 12;
    //     // console.log(stringToNumber);
    //     var numberToString = stringToNumber.toString();
    //     // console.log(numberToString);
    //     if (timeString.length == 8) {
    //       var timeSlice = timeString.slice(2);
    //       // console.log(timeSlice);
    //     } else {
    //       var timeSlice = timeString.slice(1);
    //       // console.log(timeSlice);
    //     }
    //     var timeHourMinuteConcat = numberToString.concat("", timeSlice);
    //     // console.log(timeHourMinuteConcat);
    //     var timeSliceTwo = timeHourMinuteConcat.slice(0, 5);
    //     // console.log(timeSliceTwo);
    //   } else {
    //     // console.log(this.timePicker.value);
    //     var timeStringTwo = timeObject.time;
    //     // console.log(timeStringTwo);
    //     if (timeStringTwo.length == 8) {
    //       var timeSliceThree = timeStringTwo.slice(0, 5);
    //       // console.log(timeSliceThree);
    //     } else {
    //       var timeSliceFour = timeStringTwo.slice(0, 4);
    //       // console.log(timeSliceFour);
    //     }
    //   }
  }

}

