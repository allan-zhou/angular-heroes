import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';
import { ErrorHandler } from '../utils/ErrorHandler';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit(): void {
        console.log('DashboardComponent OnInit');
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => { this.heroes = heroes.slice(0, 4) })
            .catch(err => {
                ErrorHandler.handleUnauthorizedError(err, this.router);
            })
    }
}