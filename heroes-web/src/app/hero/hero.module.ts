import { CommonModule }   from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  providers: [ ]
})
export class HeroModule { }
