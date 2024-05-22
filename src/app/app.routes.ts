import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './department/department-update/department-update.component';
import { DepartmentDeleteComponent } from './department/department-delete/department-delete.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"students",loadChildren:()=>import("./student/student.routes").then(a=>a.StdRoutes)},
    {path:"departments",loadChildren:()=>import("./department/department.routes").then(a=>a.dptRoutes)},
    {path:"students/details/:id",component:StudentDetailsComponent},
    {path:"students/delete/:id",component:StudentDeleteComponent},
    {path:"students/edit/:id",component:StudentUpdateComponent},

    { path: 'departments/details/:id', component: DepartmentDetailsComponent },
    { path: 'departments/add', component: DepartmentAddComponent },
    { path: 'departments/edit/:id', component: DepartmentUpdateComponent },
    { path: 'departments/delete/:id', component: DepartmentDeleteComponent },

    // {path:"student/list",component:StudentListComponent},
    // {path:"students",component:StudentListComponent,children:[
    //     {path:"details/:id",component:StudentDetailsComponent},
    //     {path:"add",component:StudentAddComponent},
    // ]},
    {path:"students/add",component:StudentAddComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"**",component:NotfoundComponent},
];
