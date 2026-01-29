import { TestBed } from '@angular/core/testing';
import { TodoListStore } from './todo-list-store';

describe('TodoListStore', () => {
  let service: TodoListStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
