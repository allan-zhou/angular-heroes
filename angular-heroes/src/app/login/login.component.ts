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
    }

    onSubmit(): void {
        this.authService.getToken(this.loginForm)
            .subscribe(data => {
                console.log(data);
                if (data.success) {
                    localStorage.setItem('JWToken', data.token);
                    this.router.navigateByUrl('/')
                }
            });
    }

    get diagnostic() { return JSON.stringify(this.loginForm); }
}