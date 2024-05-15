import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  departments: any = []; 
  employeeList: any = []; 
  isListView : boolean = true;

  employeeObject: any ={
    firstName: "",
    lastName: "",
    department: "",
    departmentId: "",
    gender: "",
    email: "",
    phoneNumber: ""
  }

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadDepartments(){
    this.http.get("assets/departments.json").subscribe((res:any) =>{
      //debugger;
      this.departments = res.data;
      console.log(res.data);
      
    })
  }

  loadEmployees(){
    this.http.get("assets/getEmployee.json").subscribe((res: any) =>{
      this.employeeList = res.data;
      console.log(res.data)
    })
  }

  onCreateEmp(){
    this.http.get("assets/postEmployee.json").subscribe((res:any)=>{
      alert(res.message)
      this.loadEmployees();
    })
  }

  onEdit(item: any) { 
    this.employeeObject = item;
    this.isListView = false;
  }
  onDelete(item: any) {

  }

}
