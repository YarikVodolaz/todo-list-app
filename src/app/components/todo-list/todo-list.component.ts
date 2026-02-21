import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'todo-list',
  standalone: false,
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.scss']
})

export class TodoListComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
  private http: HttpClient, 
  private fb: FormBuilder,
) {} 

submitForm(): void {
  if (this.validateForm.valid) {
    const url = 'http://155.212.244.17:3001/auth/login';
    const data = {
      email: this.validateForm.value.email,
      password: this.validateForm.value.password
    };

    this.http.post(url, data).subscribe({
      next: (response) => console.log('Успех:', response),
      error: (error) => console.error('Ошибка:', error)
    });
  }
}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [ Validators.required]]
    });
  }
}

