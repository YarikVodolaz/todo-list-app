import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoListStore } from '../../services/todo-list-store';
import { TodoListRequests } from '../../services/todo-list-requests';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  providers: [TodoListStore, TodoListRequests],
  exports: [TodoListComponent]
})

export class TodoListModule { }