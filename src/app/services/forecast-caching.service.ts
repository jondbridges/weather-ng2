import { Injectable } from "@angular/core";
import { ForecastDay } from "../models/forecast-day.model";

@Injectable()
export class ForecastCachingService {
  forecastDays: ForecastDay[];

  getForecastDayById(id: number): ForecastDay {
    return this.forecastDays
      .find(forecastDay => forecastDay.id == id);
  }
}
