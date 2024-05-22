import { Component } from '@angular/core';
import {Department} from '../../_models/department'
import { FormsModule } from '@angular/forms';
import { DepartmentService } from "../../_services/department.service";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css'
})
export class DepartmentAddComponent {
  nstd:Department=new Department(0,'','')
  constructor(public DepartmentService:DepartmentService, public router:Router) {
    
  }


  save(){
      // this.DepartmentService.adddepartment(new Department (this.nstd.id,this.nstd.name,this.nstd.location))
      this.DepartmentService.adddepartment(this.nstd).subscribe(d => {
      this.router.navigateByUrl('/departments')
    })
  }

}
