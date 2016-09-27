import { Component } from '@angular/core';

@Component({
  selector: 'wng-home',
  template: `
    <div class="container home-content">
      <div class="col-md-4 col-md-offset-4 text-center">
        <div class="home-search-label">Enter a City and State</div>
        <wng-search></wng-search>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
