import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import  {StudentComponent} from './student/student.component'
import {DepartmentComponent} from './department/department.component'
import { Comp1Component } from './test/comp1/comp1.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,StudentComponent,DepartmentComponent
            ,Comp1Component,RouterLink,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task1';
}
