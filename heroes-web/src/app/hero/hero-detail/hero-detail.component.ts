import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private activated: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.activated.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack(): void {
    // this.location.back();
    this.router.navigateByUrl('/heroes');
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .then(() => this.goBack());
  }
}