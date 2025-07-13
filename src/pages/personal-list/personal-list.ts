import { Component, Input } from '@angular/core';
import { Employee } from '../personal/personal';

@Component({
  selector: 'app-personal-list',
  imports: [],
  templateUrl: './personal-list.html',
  styleUrl: './personal-list.css',
})
export class PersonalList {
  @Input() employeesList: Employee[] = [];
}
