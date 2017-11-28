import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PassportService } from '../services/passport.service';
import { LoginFrom } from '../models/login-form';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    @Input() model: LoginFrom;

    constructor(
        private passportService: PassportService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.model ={ username:'', password:'' }
    }

    onSubmit(): void {
        console.log(this.model);
    }

    get diagnostic() { return JSON.stringify(this.model); }
}