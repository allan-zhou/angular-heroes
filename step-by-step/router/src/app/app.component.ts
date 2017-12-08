import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet name="popup"></router-outlet>
  <router-outlet></router-outlet>`
})

export class AppComponent {

}
