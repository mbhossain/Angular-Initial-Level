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

  constructor(
    private _employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  timePicker = new FormGroup({
    time: new FormControl(''),
  })

  getTime(){
    console.log(this.timePicker.value);
  }

}
