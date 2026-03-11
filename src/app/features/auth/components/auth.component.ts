import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable()
export class BackendPrefixInterceptor implements HttpInterceptor {
  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/')) {
      const changedRequest: HttpRequest<unknown> = request.clone({
        url: environment.apiUrl + request.url,
      });
      return next.handle(changedRequest);
    }

    return next.handle(request);
  }
}

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: 'auth.component.html',
  styleUrl: 'auth.component.scss',
})
export class Auth implements OnInit {
  validateForm!: FormGroup;

  constructor(
  private http: HttpClient, 
  private fb: FormBuilder,
) {} 

submitForm(): void {
  if (this.validateForm.valid) {
    const url = environment.apiUrl + '/auth/login';
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