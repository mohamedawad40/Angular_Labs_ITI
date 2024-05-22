import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../_services/department.service';
import { Department } from '../../_models/department';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css'
})
export class DepartmentUpdateComponent {
  id:number=0
  
  // std:Department|null=null
  std: Department = new Department(0,'','');
  constructor(public activatedRoute:ActivatedRoute,public departmentService:DepartmentService,public router:Router){}
  
  // ngOnInit(){
  //   this.activatedRoute.params.subscribe((d)=>{
  //     this.id=d['id'];
  //     let department=this.departmentService.getDepartment(this.id);
  //     if (department) {
  //       this.std = department;
  //     }
  //   })
  // }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(par => {
      this.departmentService.getDepartment(par['id']).subscribe(d => {
        this.std = d;
      })
    })
  }
  saveChanges(): void {
    // this.departmentService.edit(this.std);
    // this.router.navigateByUrl('/departments')
    this.departmentService.update(this.std).subscribe(d => {
      this.std = d;
      this.router.navigate(['/departments'])
    })
  }

}
