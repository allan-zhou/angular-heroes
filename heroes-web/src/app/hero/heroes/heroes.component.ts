import { Component, OnInit } from '@angular/core';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    seletedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        console.log('HeroesComponent OnInit');
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.seletedHero = hero;
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.addHero({ name } as Hero)
            .then(hero => {
                console.log(hero);
                this.heroes.push(hero);
            });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).then();
    }
}