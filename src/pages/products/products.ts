import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, resource } from '@angular/core';
import { RouterLink } from '@angular/router';
import { lastValueFrom, timeout } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export default class Products {
  readonly #http = inject(HttpClient);
  readonly result = resource({
    loader: async () => {
      const res = await lastValueFrom(
        this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      );
      await new Promise((res) => setTimeout(res, 2000));
      return res;
    },
  });

  readonly todos = computed(() => this.result.value() ?? []);
  readonly loading = computed(() => this.result.isLoading());
  readonly error = computed(() => {
    console.log(this.result.error()?.message);
    return this.result.error() ? 'Something went wrong' : undefined;
  });
  // constructor() {
  //   this.get();
  // }

  // get() {
  //   this.#http
  //     .get<any[]>('https://jsonplaceholder.typicode.com/todos')
  //     .subscribe((res) => (this.todos = res));
  // }

  // async getWthAsync() {
  //   var res = await lastValueFrom(
  //     this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
  //   );
  //   this.todos = res;
  // }
}
