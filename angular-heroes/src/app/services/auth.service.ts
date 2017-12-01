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

    login(loginForm: LoginFrom): Observable<any> {
        const url = `${this.authUrl}/login`;
        return this.http.post(url, loginForm, httpOptions);
    }

    refreshToken(token: string): Observable<any> {
        const url = `${this.authUrl}/refreshtoken?token=${token}`;

        return this.http.get(this.authUrl, httpOptions);
    }

    isLoggedIn(): boolean {
        const user = localStorage.getItem('CurrentUser');
        if (user) {
            return true;
        }
        return false;
    }
}