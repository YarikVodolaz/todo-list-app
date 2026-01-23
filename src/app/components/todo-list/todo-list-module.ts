import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoList } from './todo-list';
import { TodoListStore} from '../../services/todo-list-store';
import { TodoListRequests } from '../../services/todo-list-requests';

@NgModule({
  declarations: [TodoList],
  imports: [CommonModule],
  providers: [
    TodoListStore,
    TodoListRequests
  ],
  exports: [TodoList]
})
export class TodoListModule {}