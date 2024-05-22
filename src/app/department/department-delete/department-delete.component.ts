import { Component } from '@angular/core';
import { DepartmentService } from '../../_services/department.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-department-delete',
  standalone: true,
  imports: [],
  templateUrl: './department-delete.component.html',
  styleUrl: './department-delete.component.css'
})
export class DepartmentDeleteComponent {
  constructor(public departmentService: DepartmentService, private router: Router, public activateRoutes: ActivatedRoute) {
    this.deleteDepartment();
  }

  deleteDepartment() {
    this.activateRoutes.params.subscribe(par => {
      this.departmentService.delete(par['id']).subscribe(d => {
        this.router.navigate(['/departments'])
      })
    })
  }
}
