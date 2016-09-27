import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <wa-header></wa-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
