import { Component, OnDestroy, OnInit } from '@angular/core';
import { Department } from '../../_models/department';
import { DepartmentService } from '../../_services/department.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    DepartmentUpdateComponent,
  ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})

export class DepartmentListComponent implements OnInit, OnDestroy {
  sub:Subscription|null = null;
  departments: Department[] = [];
  
  constructor(public DepartmentService: DepartmentService, public router: Router,public activatedRoute:ActivatedRoute) {}
  
  ngOnInit() {
    // this.departments = this.DepartmentService.getAll(); //static
    this.sub=this.DepartmentService.getAll().subscribe(data=>this.departments=data);

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  delete() {
    this.activatedRoute.params.subscribe(par => {
      this.DepartmentService.delete(par['id']).subscribe(d => {
        this.router.navigate(['/departments'])
      })
    })
  }


  // allDepartments(){
  //   this.departments=this.DepartmentService.getAll();
  // }

  // std: Department = new Department(1, 'John Doe','');
  // flag = false;
  // eflag = false;

  // nstd: Department = new Department(0, '','');

  // editstd: Department = new Department(0, '','');

  // delete(s: Department) {
  //   this.DepartmentService.deletedepartment(s);
  // }

  // edit(s:Student){
  //   this.eflag=true
  //   this.editstd=s
  //   this.nstd.name=this.editstd.name

  // }
  // submit(){
  //   this.StudentService.updatestudent(this.editstd, this.nstd);
  //   }
  goToAdd() {
    this.router.navigate(['/departments/add']);
  }
}
