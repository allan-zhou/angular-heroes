import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginFrom } from '../models/login-form';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class AuthService {
    private authUrl = ' http://192.168.1.217:3000/api/auth';
    private loginForm: LoginFrom;

    constructor(
        private http: HttpClient
    ) { }

    getToken(loginForm: LoginFrom): Observable<any> {
        console.log(loginForm);
        return this.http.post(this.authUrl, loginForm, httpOptions);
    }

    getAuthorizationHeader(): Observable<any> {
        return this.http.post(this.authUrl, this.loginForm, httpOptions);
        // return `Bearer ${token}`;
    }
}