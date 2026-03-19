import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthApiService } from '../services/auth-request.service';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: 'auth.component.html',
  styleUrl: 'auth.component.scss',
})
export class Auth implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private authApiService: AuthApiService,
    private fb: FormBuilder,
  ) {}

submitForm(): void {
  if (this.validateForm.valid) {
    const url = '/auth/login';
    const data = {
      email: this.validateForm.value.email,
      password: this.validateForm.value.password
    };

      this.authApiService.login(data).subscribe({
        next: (response) => console.log('Успех:', response),
        error: (error) => console.error('Ошибка:', error)
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
