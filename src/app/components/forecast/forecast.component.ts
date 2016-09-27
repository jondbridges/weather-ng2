import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ForecastDay } from "../../domain/forecast-day";
import { WeatherService }  from '../../services/weather.service';

@Component({
  selector: 'wng-forecast',
  template: `
    <div class="container">
      <div class="page-header">
        <h1 class="forecast-header">
          {{cityState}} <small>Select a day</small>
        </h1>
      </div>
        <div *ngFor="let forecastDay of forecastDays" 
             class="col-xs-6 col-sm-4 col-md-3 forecast-card forecast-day">
          <img 
            class="center-block weather-icon" 
            src="assets/images/weather-icons/{{forecastDay.conditionIcon}}.svg"
            alt="Weather" />
          <div class="text-center">{{forecastDay.date | date:'EEEE, MMM d'}}</div>
        </div> 
    </div>
  `,
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  private cityState: string;
  private forecastDays: ForecastDay[];

  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.cityState = params['cityState'];
    });

    this.weatherService.getForecast(this.cityState)
      .then(forecastDays => this.forecastDays = forecastDays);
  }

}
