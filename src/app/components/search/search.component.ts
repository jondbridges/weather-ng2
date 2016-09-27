import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'awa-search',
  template: `
    <div class="form-group">
      <input class="form-control" [(ngModel)]="cityState" placeholder="St Louis, MO">
    </div>
    <button class="btn btn-success btn-pad-left" (click)="handleSubmitSearch()">
      Get Weather
    </button>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private cityState: string;

  constructor(private router: Router) { }

  handleSubmitSearch(): void {
    if (this.cityState) {
      this.router.navigate(['/forecast', this.cityState]);
    }
  }

}
