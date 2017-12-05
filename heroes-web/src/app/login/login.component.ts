import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { LoginFrom } from '../models/login-form';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    @Input() loginForm: LoginFrom;

    constructor(
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loginForm = new LoginFrom();
        localStorage.removeItem('JWToken');
        localStorage.removeItem('CurrentUser');
    }

    onSubmit(): void {
        this.authService.login(this.loginForm)
            .subscribe(data => {
                console.log(data);
                if (data.success) {
                    localStorage.setItem('JWToken', data.token);
                    localStorage.setItem('CurrentUser', JSON.stringify(data.user))
                    this.router.navigateByUrl('/')
                }
            });
    }

    get diagnostic() { return JSON.stringify(this.loginForm); }
}