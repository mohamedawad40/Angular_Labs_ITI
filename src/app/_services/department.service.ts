import { Injectable } from '@angular/core';
import {Department} from '../_models/department'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(public http:HttpClient) { }
  private baseUrl="http://localhost:8080/departments/"

  // departments:Department[]=[
  //   new Department(1,"os",""),
  //   new Department(2,"pd ",""),
  //   new Department(3,"ai",""),
  // ]

  // getAll(){
  //   return this.departments;    //static
  // }
  getAll(){
    return this.http.get<Department[]>(this.baseUrl); 
  }
  getDepartment(id:number){
    // let std:Department|null=null;
    // for (let index = 0; index < this.departments.length; index++){
    //   if(this.departments[index].id ==id){
    //     std=this.departments[index];
    //     break;
    //   }
    // }
    // return std;
    return this.http.get<Department>(this.baseUrl + id);
  }

  adddepartment(nstd:Department){
    // this.departments.push(new Department (nstd.id,nstd.name,nstd.location))
    return this.http.post<Department>(this.baseUrl,nstd);
  }

  // deletedepartment(s:Department){
  //     const confirmDelete = confirm("Are you sure you want to delete this department?");
  //     let index = this.departments.indexOf(s);
  //     this.departments.splice(index,1)
  //   }

  //   updatedepartment(s:Department , newdepartment:Department){
  //   const index = this.departments.findIndex(department => department.id === s.id);
  //   if (index !== -1) {
  //     this.departments[index].name = newdepartment.name;
  //   }
  // }
  update(dept: Department) {
    return this.http.put<Department>(this.baseUrl + dept._id , dept);
    //call back end, updates one department in db
  };

  // edit(std: Department) {
  //   const index = this.departments.findIndex((s) => s.id === std.id);
  //   if (index !== -1) {
  //     this.departments[index] = std;
  //   }
  // }
  delete(id: number) {
    return this.http.delete<Department>(this.baseUrl + id);
  }
}
