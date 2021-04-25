import {Component, OnInit} from "@angular/core";
import {StudentService} from "../services/student.service";
import {Student} from "../model/student";

@Component({
  selector: 'app-student',
  template: `<li *ngFor="let student of students;">{{student.Name}}, {{student.Department}}</li>`
})
export class StudentComponent implements OnInit{

  students: Student[] = [];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe(
      res => this.students = res,
      error => console.log(error)
    );
  }

}
