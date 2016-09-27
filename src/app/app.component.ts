import { Component } from '@angular/core';

@Component({
  selector: 'wng-app',
  template: `
    <wng-header></wng-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
