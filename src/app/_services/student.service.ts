import { Injectable } from '@angular/core';
import {Student} from '../_models/student'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http:HttpClient) { }
  private baseUrl="http://localhost:8080/students/"

  // students:Student[]=[
  //   new Student(1,"John Doe","",""),
  //   new Student(2,"John ","",""),
  //   new Student(3,"ahmed","",""),
  // ]

  // getAll(){
  //   return this.students; 
  // }

 
  getAll(){
    return this.http.get<Student[]>(this.baseUrl);  
  }

  getStudent(id:any){
    // let std:Student|null=null;
    // for (let index = 0; index < this.students.length; index++){
    //   if(this.students[index]._id ==id){
    //     std=this.students[index];
    //     break;
    //   }
    // }
    // return std;
    return this.http.get<Student>(this.baseUrl + id);
  }

  addstudent(nstd:Student){
    // this.students.push(new Student (nstd._id,nstd.name,nstd.department,nstd.image))
    return this.http.post<any>(this.baseUrl, nstd);

  }

  // deletestudent(s:Student){
  //     const confirmDelete = confirm("Are you sure you want to delete this student?");
  //     let index = this.students.indexOf(s);
  //     this.students.splice(index,1)
  //   }
  

    edit(student: Student) {
      return this.http.put<Student>(this.baseUrl + student._id, student);
    }
    delete(id: number) {
      return this.http.delete<Student>(this.baseUrl + id);
    }
  //   update(student: Student | any, id: any) {
  //   return this.http.put<any>(this.baseUrl + id, student);
  // }

    
  //   updatestudent(s:Student , newStudent:Student){
  //   const index = this.students.findIndex(student => student._id === s._id);
  //   if (index !== -1) {
  //     this.students[index].name = newStudent.name;
  //     this.students[index].department = newStudent.department;
  //   }
  // }
  // edit(std: Student) {
  //   const index = this.students.findIndex((s) => s._id === std._id);
  //   if (index !== -1) {
  //     this.students[index] = std;
  //   }
  // }

}
