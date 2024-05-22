import { Component, OnDestroy, OnInit } from '@angular/core';
import {Student} from '../../_models/student'
import { StudentService } from "../../_services/student.service";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StudentUpdateComponent } from '../student-update/student-update.component';



@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet,StudentUpdateComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit,OnDestroy
{
  students:Student[] =[];
  constructor(public StudentService:StudentService,public router:Router) {}
  ngOnInit(){
    // this.students=this.StudentService.getAll();  //static
    this.StudentService.getAll().subscribe(data=>this.students=data);

  }  

  // allStudents(){
  //   this.students=this.StudentService.getAll();
  // }

  // std:Student=new Student(1,"John Doe","","")
  // flag=false
  // eflag=false

  // nstd:Student=new Student(0,'',"","")

  // editstd:Student=new Student(0,'',"","")

  // delete(s:Student){
  //   this.StudentService.deletestudent(s)
  // }

  // edit(s:Student){
  //   this.eflag=true
  //   this.editstd=s
  //   this.nstd.name=this.editstd.name
  //   this.nstd.age=this.editstd.age

  // }
  // submit(){
  //   this.StudentService.updatestudent(this.editstd, this.nstd);
  //   }
    goToAdd(){
      this.router.navigate(['/students/add'])
    }
    ngOnDestroy(){

    }
  }




