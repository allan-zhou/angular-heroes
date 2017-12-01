import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
    selector: 'topmenu',
    templateUrl: './topmenu.component.html',
    styleUrls: ['./topmenu.component.css']
})


export class TopmenuComponent implements OnInit {
    title = 'Tour of Heroes';
    currentUser: User;

    constructor(
        private router: Router
    ) { }

    ngOnInit(): void {
        this.currentUser = JSON.parse(localStorage.getItem('CurrentUser'));
    }

    logout(): void {
        localStorage.removeItem('CurrentUser');
        localStorage.removeItem('JWToken');
        this.router.navigateByUrl('/login');
    }

}