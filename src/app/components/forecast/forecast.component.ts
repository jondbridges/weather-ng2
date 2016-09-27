import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'wng-forecast',
  template: `
    <div class="container">
      <div class="page-header">
        <h1 class="forecast-header">
          {{cityState}} <small>Select a day</small>
        </h1>
      </div>
      <p>List of Forecast Days Here</p>
    </div>
  `,
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  private cityState: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.cityState = params['cityState'];
    })
  }

}
