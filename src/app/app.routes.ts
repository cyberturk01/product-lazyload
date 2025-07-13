import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import Layout from '../pages/layout/layout';
import Home from '../pages/home/home';
import Products from '../pages/products/products';
import ProductsCreate from '../pages/products/products-create/products-create';
import { Todo } from '../pages/todo/todo';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    // loadComponent: () => import('../pages/layout/layout'),
    children: [
      {
        path: '',
        // loadComponent: () => import('../pages/home/home'),
        component: Home,
      },
      {
        path: 'todo',
        // loadComponent: () => import('../pages/home/home'),
        component: Todo,
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            // loadComponent: () => import('../pages/products/products'),
            component: Products,
          },
          {
            path: 'details/:id',
            // loadComponent: () =>
            //   import('../pages/products/products-create/products-create'),
            component: ProductsCreate,
            resolve: {
              todo: ({ params }: ActivatedRouteSnapshot) => {
                const http = inject(HttpClient);
                return http.get(
                  'https://jsonplaceholder.typicode.com/todos/' + params['id']
                );
              },
            },
          },
        ],
      },
    ],
  },
];
