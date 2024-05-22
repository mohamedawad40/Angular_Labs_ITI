import { Component } from '@angular/core';
import { StudentService } from '../../_services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-delete',
  standalone: true,
  imports: [],
  templateUrl: './student-delete.component.html',
  styleUrl: './student-delete.component.css'
})
export class StudentDeleteComponent {
  constructor(public studentService:StudentService , private router: Router, public activateRoutes: ActivatedRoute) {
    this.deleteDepartment();
  }

  deleteDepartment() {
    this.activateRoutes.params.subscribe(par => {
      this.studentService.delete(par['id']).subscribe(d => {
        this.router.navigate(['/students'])
      })
    })
  }
}
