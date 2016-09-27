import { Component } from '@angular/core';

@Component({
  selector: 'awa-app',
  template: `
    <awa-header></awa-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
