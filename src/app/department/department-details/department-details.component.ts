import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../_services/department.service';
import { Department } from '../../_models/department';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent implements OnInit{
  std:Department|null=null;
  sub:Subscription|null=null;

  constructor(public activatedRoute:ActivatedRoute, public departmentService:DepartmentService) {

  }
  // ngOnInit(): void {
  //   this.sub=this.activatedRoute.params.subscribe({
  //     next:d=>{this.std=this.departmentService.getDepartment(d['id'])},
  //     error:r=>{},
  //     complete:()=>{}
  //   })
  //     // let id=this.activatedRoute.snapshot.params['id']
  //     // this.std=this.departmentService.getDepartment(id);
  // }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(par => {
      this.departmentService.getDepartment(par['id']).subscribe(d => {
        this.std = d;
      })
    });
  }
  ngOnDestroy(){
    this.sub?.unsubscribe();
  }
} 
