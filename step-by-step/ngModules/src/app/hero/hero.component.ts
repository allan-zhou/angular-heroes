import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { UserService } from '../core/user.service';

@Component({
    template: `
    <h2>Heroes of {{user.name}}</h2>
    <router-outlet></router-outlet>
  `,
    providers: [HeroService]
})
export class HeroComponent {
    user = null;
    constructor(userService: UserService) {
        this.user = userService.user;
    }
}
