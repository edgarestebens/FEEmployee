import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from '../Models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEmployeeService {
Url = 'https://localhost:44379/api/Empleado/';

  constructor(private http: HttpClient) { }

  getListEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.Url);
  }

  getListEmployeeid(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.Url + id);
  }

}

