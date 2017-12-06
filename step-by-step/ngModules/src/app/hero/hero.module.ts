import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

/* Modules */
import { HeroRoutingModule } from './hero-routing.module';
import { SharedModule } from '../shared/shared.module';

/* Components */
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
    imports: [HeroRoutingModule, SharedModule],
    declarations: [HeroComponent, HeroDetailComponent, HeroListComponent]
})
export class HeroModule { }
