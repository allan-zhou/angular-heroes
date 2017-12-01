import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AuthService } from '../services/auth.service';


//https://github.com/angular/angular/issues/18224
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private injector: Injector
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const authHeader = this.authService.getToken();
        // const authenticationService = this.injector.get(AuthService);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsIm5pY2tOYW1lIjoiQURNSU4iLCJjcmVhdGVCeSI6eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsIm5pY2tOYW1lIjoiQURNSU4ifSwiaWF0IjoxNTExOTQ4MjM4LCJleHAiOjE1MTE5NTE4Mzh9.Q-W5KAzZOQYJr0hBc6mWXKWJYmywHI9WgHE7FSgNgKA';

        // Clone the request to add the new header.
        const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('JWToken')) });
        // const authReq = req.clone({setHeaders: {Authorization: authHeader}});

        const started = Date.now();
        return next.handle(authReq);
        // return next.handle(authReq).do(event => {
        //     if (event instanceof HttpResponse) {
        //         const elapsed = Date.now() - started;
        //         console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
        //     };
        // });
    }
}