import { Component } from "@angular/core";
import {Student} from '../_models/student'
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { StudentService } from "../_services/student.service";
import {StudentListComponent} from './student-list/student-list.component'
import {StudentAddComponent} from '../student/student-add/student-add.component'

@Component({
    selector: "app-student",
    imports:[CommonModule,FormsModule,StudentListComponent,StudentAddComponent],
    standalone: true,
    templateUrl: "./student.component.html",
})

export class StudentComponent{
  constructor(public StudentService:StudentService) {
    
  }

  }


