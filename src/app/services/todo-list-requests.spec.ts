import { TestBed } from '@angular/core/testing';

import { TodoListRequests } from './todo-list-requests';

describe('TodoListRequests', () => {
  let service: TodoListRequests;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListRequests);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
