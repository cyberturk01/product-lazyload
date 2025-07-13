import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  isUpdated: boolean = false;
  search: string = '';
  searchSomething: string = 'Search Something:';
  updateIndex: number = 0;
  updateWork: string = '';
  // todos: string[] = ['Tomate', 'Pears', 'Apple'];
  // work: string = '';
  // date: Date | undefined;
  // price: number = 123412;

  // enterWork(event: any) {
  //   this.work = event.target.value;
  // }
  // save() {
  //   this.todos.push(this.work);
  //   this.work = '';
  // }
  // delete(index: number) {
  //   this.todos.splice(index, 1);
  // }
  // get(index: number) {
  //   this.updateIndex = index;
  //   this.updateWork = this.todos[index];
  //   this.isUpdated = true;
  // }
  // update() {
  //   this.todos[this.updateIndex] = this.updateWork;
  //   this.updateWork = '';
  //   this.isUpdated = false;
  // }
  todos: { work: string; date?: Date; price: number }[] = [
    { work: 'Tomate', date: this.getDate(), price: 123412 },
    { work: 'Pears', date: this.getDate(), price: 123412 },
    { work: 'Apple', date: this.getDate(), price: 123412 },
  ];

  work: string = '';
  date: Date = this.getDate();
  price: number = 123412;

  // updateIndex: number = -1;
  // updateWork: string = '';
  // isUpdated: boolean = false;

  enterWork(event: any) {
    this.work = event.target.value;
  }

  save() {
    this.todos.push({ work: this.work, date: this.date, price: this.price });
    this.work = '';
    this.date = this.getDate();
    this.price = 123412;
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  get(index: number) {
    this.updateIndex = index;
    this.updateWork = this.todos[index].work;
    this.isUpdated = true;
  }

  update() {
    this.todos[this.updateIndex].work = this.updateWork;
    this.updateWork = '';
    this.isUpdated = false;
  }

  getDate() {
    return (this.date = new Date());
  }
}
