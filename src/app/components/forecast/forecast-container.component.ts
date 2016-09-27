import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForecastDay } from "../../domain/forecast-day";
import { WeatherService }  from '../../services/weather.service';
import { ForecastCachingService } from '../../services/forecast-caching.service';

@Component({
  selector: 'wng-forecast-container',
  template: `
    <div class="container">
      <div class="page-header">
        <h1 class="forecast-header">
          {{cityState}} <small>Select a day</small>
        </h1>
      </div>
      <div *ngIf="isLoading">
        <wng-spinner class="col-md-4 col-md-offset-4 text-center" 
          [displayText]="'Loading...'"></wng-spinner>
      </div>
      <div *ngIf="!isLoading">
        <wng-forecast-day *ngFor="let forecastDay of forecastDays" 
          class="col-xs-6 col-sm-4 col-md-3 forecast-card"
          [forecastDay]="forecastDay"
          (click)="handleForecastDaySelect(forecastDay)">
        </wng-forecast-day> 
      </div>
    </div>
  `,
  styleUrls: ['./forecast-container.component.css']
})
export class ForecastContainerComponent implements OnInit {

  private cityState: string;
  private forecastDays: ForecastDay[];
  private isLoading: boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private weatherService: WeatherService,
              private forecastCachingService: ForecastCachingService) { }

  ngOnInit() {
    this.getCityStateFromRoute();
    this.getForecastDays();
  }

  private getCityStateFromRoute() {
    this.cityState = this.route.snapshot.params['cityState'];
  }

  private getForecastDays() {
    this.weatherService.getForecast(this.cityState)
      .then(forecastDays => {
        this.forecastDays = forecastDays;
        this.forecastCachingService.forecastDays = forecastDays;
        this.isLoading = false;
      })
      .catch(err => console.log('Error getting forecast', err));
  }

  private handleForecastDaySelect(forecastDay: ForecastDay) {
    this.router.navigate(['/forecast', this.cityState, forecastDay.id]);
  }
}
