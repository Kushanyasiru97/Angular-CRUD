import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  departments: any = []; 
  isListView : boolean = true;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(){
    this.http.get("assets/departments.json").subscribe((res:any) =>{
      //debugger;
      this.departments = res.data;
      console.log(res.data);
      
    })
  }

}
