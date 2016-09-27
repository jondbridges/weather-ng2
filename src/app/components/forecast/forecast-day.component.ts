import { Component } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { ForecastDay } from "../../domain/forecast-day";

@Component({
  selector: 'wng-forecast-day',
  template: `
    <div class="forecast-day">
      <img class="center-block weather-icon" 
        src="assets/images/weather-icons/{{forecastDay.conditionIcon}}.svg"
        alt="Weather" />
      <div class="text-center">{{forecastDay.date | date:'EEEE, MMM d'}}</div>
    </div>
  `,
  styleUrls: ['forecast-day.component.css']
})
export class ForecastDayComponent {
  @Input() forecastDay: ForecastDay;
}
