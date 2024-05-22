import { Routes } from '@angular/router';
import { StudentAddComponent } from "./student-add/student-add.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';




export const StdRoutes: Routes = [
{path:"",component:StudentListComponent}
]