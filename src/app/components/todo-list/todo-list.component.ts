import { Component, OnInit } from '@angular/core';
import { TodoListStore } from '../../services/todo-list-store';
import { TodoListRequests } from '../../services/todo-list-requests';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList implements OnInit {
  constructor(
    private store: TodoListStore,
    private requests: TodoListRequests,
  ) {}

  ngOnInit(): void {
    console.log('Сервисы внедрены:', this.store, this.requests);
  }
}
