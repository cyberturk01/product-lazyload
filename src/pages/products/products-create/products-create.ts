import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-create',
  imports: [RouterLink],
  templateUrl: './products-create.html',
  styleUrl: './products-create.css',
})
export default class ProductsCreate {
  @Input() todo: any;
}
