import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../_services/student.service';
import { Student } from '../../_models/student';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  std:Student|null=null;
  sub:Subscription|null=null;
  constructor(public activatedRoute:ActivatedRoute, public studentService:StudentService) {

  }
  // ngOnInit(): void {
  //   this.sub=this.activatedRoute.params.subscribe({
  //     next:d=>{this.std=this.studentService.getStudent(d['id'])},
  //     error:r=>{},
  //     complete:()=>{}
  //   })
  //     // let id=this.activatedRoute.snapshot.params['id']
  //     // this.std=this.studentService.getStudent(id);
  // } 
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(par => {
      this.studentService.getStudent(par['id']).subscribe(d => {
        this.std = d;
      })
    })

  }
  ngOnDestroy(){
    this.sub?.unsubscribe();
  }
} 
