import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { Angular10AnilComponent } from './components/angular10-anil/angular10-anil.component';


@NgModule({
  declarations: [Angular10AnilComponent],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
