import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  //req - request of any type, next is a fuction which allows the continuation
  // of requests journey.
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    //logic/steps to impliment before request leaves the app
    //modifying the request header by appending new data
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    });
    
    //without returning request wont complete
    //here we are forwarding the modified request
    return next.handle(modifiedRequest);
  }
}
