import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wng-search',
  template: `
    <div class="form-group">
      <input class="form-control" type="text" placeholder="St Louis, MO">
    </div>
    <button class="btn btn-success btn-pad-left" type="submit">
      Get Weather
    </button>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
