import { Component } from '@angular/core';

@Component({
  selector: 'awa-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/">
            <img src="assets/images/angular2-logo.png" alt="React" />
            Angular 2 Weather
          </a>
        </div>
        <div class="navbar-form navbar-right">
          <awa-search></awa-search>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }
