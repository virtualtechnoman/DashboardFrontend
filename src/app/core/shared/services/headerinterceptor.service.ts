import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeaderinterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req, next) {
    let token = localStorage.getItem('access_token');
    let tokenizer = req.clone({
      setHeaders: {
        Authorization: token
      }
    });
    return next.handle(tokenizer);
  }

}
