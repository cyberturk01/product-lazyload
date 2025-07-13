import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonalList } from '../personal-list/personal-list';
import { Httpservice } from '../httpservice';
import { HttpHeaders, HttpParams } from '@angular/common/http';

export class Employee {
  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
}

@Component({
  selector: 'app-personal',
  imports: [FormsModule, PersonalList],
  templateUrl: './personal.html',
  styleUrl: './personal.css',
})
export class Personal {
  employee = new Employee();

  employeesMainClass: Employee[] = [];

  save() {
    console.log(this.employee);

    if (
      !this.employee.firstName.trim() ||
      !this.employee.lastName.trim() ||
      !this.employee.dateOfBirth.trim()
    ) {
      this.employee = new Employee();
      return;
    }

    this.employeesMainClass.push({ ...this.employee });
    this.employee = new Employee();
  }

  //Sample GET POST

  readonly #http = inject(Httpservice);
  todos: any[] = [];
  loading: boolean = false;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer asadas',
    }),
    params: new HttpParams().set('userId', 1).set('role', 'admin'),
  };
  get() {
    this.#http.get<any>('https://jsonplaceholder.typicode.com/todos', (res) => {
      //succesful response
    });
  }

  get2() {
    this.#http.get<any>(
      'https://jsonplaceholder.typicode.com/todos',
      (res) => {
        //succesful response
      },
      (err) => {
        //catch error response here
      }
    );
  }

  post() {
    const body = {
      title: '',
      userId: 0,
    };
    this.#http.post<any>(
      'https://jsonplaceholder.typicode.com/todos',
      body,
      (res) => {
        //succesful response
      },
      (err) => {
        //catch error response here
      }
    );
  }
}
