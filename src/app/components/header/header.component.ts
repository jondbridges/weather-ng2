import { Component } from '@angular/core';

@Component({
  selector: 'awa-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/">
            Angular Weather App
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
