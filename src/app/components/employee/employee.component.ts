import { Component, OnInit } from '@angular/core';
import { ServiceEmployeeService } from 'src/app/service/service-employee.service';
import { Employee } from 'src/app/Models/Employee';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
listEmployee: Employee[];
loading = false;
employee: FormGroup;

  constructor(private serviceEmployee: ServiceEmployeeService,
              private form: FormBuilder) {
                this.employee = this.form.group({
                  EmployeeId: [''],
                });
              }


  ngOnInit(): void {
    this.CargarEmployee();
    this.loading = false;
  }

  CargarEmployee(){
    this.loading = true;
    this.serviceEmployee.getListEmployee().subscribe(data => {
      this.loading = false;
      this.listEmployee = data;
      console.log(data);
    });
  }

  CargarEmployeeid(id: number){
    this.serviceEmployee.getListEmployeeid(id).subscribe(data => {
      const result = [data];
      this.listEmployee = result;
    });


  }

  buscaremployee()
  {

    if (this.employee.get('EmployeeId').value === null)
    {
      this.CargarEmployee();
    }
    else
    {
      this.CargarEmployeeid(this.employee.get('EmployeeId').value);
    }

  }

}
