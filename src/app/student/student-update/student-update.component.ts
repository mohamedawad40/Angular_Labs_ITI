import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../_services/student.service';
import { Student } from '../../_models/student';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  id:number=0
  // std:Student|null=null
  std: Student = new Student(0, '', '','');
  constructor(public activatedRoute:ActivatedRoute,public studentService:StudentService,public router:Router){}
  // ngOnInit(){
  //   this.activatedRoute.params.subscribe((d)=>{
  //     this.id=d['id'];
  //     let student=this.studentService.getStudent(this.id);
  //     if (student) {
  //       this.std = student;
  //     }
  //   })
  // }
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(params => {
  //     const id = params['id'];
  //     this.studentService.getStudent(id).subscribe((student: any) => {
  //       this.std = student;
  //     });
  //   });
  // }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(par => {
      this.studentService.getStudent(par['id']).subscribe(d => {
        this.std = d;
      })
    })
  }

  // UpdateStudent() {
  //   const formData = new FormData();
  //   formData.append('name', this.std.name);
  //   formData.append('_id', this.std._id);
  //   formData.append('department', this.std.department);
  //   formData.append('image', this.std.image);
  //   this.studentService.update(formData, this.std._id).subscribe(
  //     res => {
  //       if (res) {
  //         this.router.navigate(['/students']);
  //       }
  //     }
  //   )
  // }
  // onFileSelect(event: any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.std.image = file;
  //   }
  // }

  saveChanges(): void {
    // this.studentService.edit(this.std);
    // this.router.navigateByUrl('/students')
    this.studentService.edit(this.std).subscribe(d => {
      this.std = d;
      console.log(this.std);
      this.router.navigate(['/students'])
    })
  }
  onDepartmentChange(event: any) {
    this.std.department = event.target.value;
        this.std.department = event.target.value;
        // console.log(this.std.department );

  }

}
