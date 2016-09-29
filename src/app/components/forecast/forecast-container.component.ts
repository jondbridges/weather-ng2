import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForecastDay } from '../../domain/forecast-day';
import { WeatherService }  from '../../services/weather.service';
import { ForecastCachingService } from '../../services/forecast-caching.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'awa-forecast-container',
  template: `
    <div class="container">
      <div class="page-header">
        <h1 class="forecast-header">
          {{cityState}} <small>Select a day</small>
        </h1>
      </div>
      <div *ngIf="isLoading">
        <awa-spinner class="col-md-4 col-md-offset-4 text-center" 
          [displayText]="'Loading...'"></awa-spinner>
      </div>
      <div *ngIf="!isLoading">
        <awa-forecast-day *ngFor="let forecastDay of forecastDays" 
          class="col-xs-6 col-sm-4 col-md-3 forecast-card"
          [forecastDay]="forecastDay"
          (click)="handleForecastDaySelect(forecastDay)">
        </awa-forecast-day> 
      </div>
    </div>
  `,
  styleUrls: ['./forecast-container.component.css']
})
export class ForecastContainerComponent implements OnInit {

  private cityState: string;
  private forecastDays: ForecastDay[];
  private isLoading: boolean = true;
  private routeSub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private weatherService: WeatherService,
              private forecastCachingService: ForecastCachingService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.cityState = params['cityState'];
      this.getForecastDays(this.cityState);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  private getForecastDays(cityState) {
    this.weatherService.getForecast(cityState)
      .then(forecastDays => {
        this.forecastDays = forecastDays;
        this.forecastCachingService.forecastDays = forecastDays;
        this.isLoading = false;
      })
      .catch(err => console.log('Error getting forecast', err));
  }

  private handleForecastDaySelect(forecastDay: ForecastDay) {
    this.router.navigate(['/detail', this.cityState, forecastDay.id]);
  }
}
