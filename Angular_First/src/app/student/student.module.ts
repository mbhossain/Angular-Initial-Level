import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentComponent} from "./student.component";
import {StudentRouting} from "./student.routing";

@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRouting
  ]
})
export class StudentModule { }
