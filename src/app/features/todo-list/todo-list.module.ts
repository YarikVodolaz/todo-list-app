import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './components/todo-list.component';
import { TodoListStore } from './services/todo-list-store.service';
import { TodoListRequestsService } from './services/todo-list-requests.service';
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
  providers: [TodoListStore, TodoListRequestsService],
  exports: [TodoListComponent]
})

export class TodoListModule { }