import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export default class Products {
  todos: any[] = [];

  constructor() {
    this.get();
  }

  readonly #http = inject(HttpClient);

  get() {
    this.#http
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((res) => (this.todos = res));
  }

  // async getWthAsync() {
  //   var res = await lastValueFrom(
  //     this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
  //   );
  //   this.todos = res;
  // }
}
