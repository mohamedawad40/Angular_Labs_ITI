import { Component } from '@angular/core';
import {Student} from '../../_models/student'
import { FormsModule } from '@angular/forms';
import { StudentService } from "../../_services/student.service";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  nstd:Student=new Student(0,'','','')
  constructor(public StudentService:StudentService, public router:Router) {
    
  }
  
  // save() {
  //   const formData = new FormData();
  //   formData.append('name', this.nstd.name);
  //   formData.append('_id', this.nstd._id);
  //   formData.append('department', this.nstd.department);
  //   formData.append('image', this.nstd.image);
  //   this.StudentService.addstudent(formData).subscribe(
  //     res => {
  //       if (res.data) {
  //         this.router.navigate(['/students']);
  //       }
  //     }
  //   )
  // }

  save(){
      // this.StudentService.addstudent(new Student (this.nstd._id,this.nstd.name,this.nstd.department,this.nstd.image))
      this.StudentService.addstudent(this.nstd).subscribe(d => {
      this.router.navigateByUrl('/students')
    })
  }
}
