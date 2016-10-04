import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ForecastDay } from '../models/forecast-day.model';

const APP_ID = 'f6ea15ddd1b9a6e5f6911074912b7eb6';
export const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${APP_ID}&mode=json&units=imperial`;

@Injectable()
export class WeatherService {

  constructor(private http: Http) {}

  getForecast(cityState: string): Promise<ForecastDay[]> {
    return this.getFiveDayWeatherData(cityState)
      .then(resp => {
        return resp.json().list
          .map(day => this.convertToForecastDay(day));
      })
      .catch(error => {
        // Show a friendly message in a production app.
        console.error('There was an error getting the five day weather forecast', error);
      });
  }

  private getFiveDayWeatherData(cityState: string): Promise<Response> {
    return this.http
      .get(`${FORECAST_URL}&q=${cityState}&cnt=5`)
      .toPromise();
  }

  private convertToForecastDay(day: any): ForecastDay {
    let forecastDay = new ForecastDay();
    forecastDay.id = day.dt;
    forecastDay.date = day.dt * 1000; // convert to js date from unix
    forecastDay.conditionIcon = day.weather[0].icon;
    forecastDay.desc = day.weather[0].description;
    forecastDay.minTemp = Math.round(day.temp.min);
    forecastDay.maxTemp = Math.round(day.temp.max);
    forecastDay.humidity = day.humidity;

    return forecastDay;
  }
}
