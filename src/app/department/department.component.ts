import { Component } from '@angular/core';
import { Department } from '../_models/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../_services/department.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';

@Component({
  selector: 'app-department',
  imports: [
    CommonModule,
    FormsModule,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDeleteComponent
  ],
  standalone: true,
  templateUrl: './department.component.html',
})
export class DepartmentComponent {
  constructor(public DepartmentService: DepartmentService) {}
}
