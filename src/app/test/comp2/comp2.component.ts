import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {
  @Input()
  fname="ali"

  @Output()
  onNameChange:EventEmitter<string>=new EventEmitter<string>
  lname:string=''
  save(s:string){
    this.lname=s;
    this.onNameChange.emit(this.lname)
  }
}
