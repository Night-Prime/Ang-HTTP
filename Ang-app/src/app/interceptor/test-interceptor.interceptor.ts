import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_TOKEN = 'dhti2msx68795bbfkfbfbvddh37845478gruudcuycv';
    const requestCopy = request.
    clone({setHeaders: { API_TOKEN }, body: {hello: 'Master Daniel!'}});
    console.log(requestCopy);
    return next.handle(requestCopy);
  }
}
