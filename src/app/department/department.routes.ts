import { Routes } from '@angular/router';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';

export const dptRoutes: Routes = [
  {
    path: '',
    component: DepartmentListComponent,
    // children: [
    //   { path: 'details/:id', component: DepartmentDetailsComponent },
    //   { path: 'add', component: DepartmentAddComponent },
    //   { path: 'edit/:id', component: DepartmentUpdateComponent },
    //   { path: 'delete/:id', component: DepartmentDeleteComponent },
    // ],
  },
];
