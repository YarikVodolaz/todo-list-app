import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
