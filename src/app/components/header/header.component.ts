import { Component } from '@angular/core';

@Component({
  selector: 'wng-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="/">
            Angular Weather Inc
          </a>
        </div>
        <div class="navbar-form navbar-right">
          <wng-search></wng-search>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }
