import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-layout',
  imports: [Navbar, Sidebar, Todo, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export default class Layout {}
