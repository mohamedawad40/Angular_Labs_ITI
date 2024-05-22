import { Component, EventEmitter, Output } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [Comp2Component],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

  name="awad"
  fullname="essam"

  myfun(s:string){
    this.fullname=s
  }
}
