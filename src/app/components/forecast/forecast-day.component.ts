import { Component } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { ForecastDay } from "../../models/forecast-day.model";

@Component({
  selector: 'awa-forecast-day',
  template: `
    <div class="day-container">
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
