import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastDay } from "../../domain/forecast-day";
import { ForecastCachingService } from '../../services/forecast-caching.service';

@Component({
  selector: 'awa-forecast-detail',
  template: `
    <div class="detail">
      <awa-forecast-day [forecastDay]="forecastDay"></awa-forecast-day>
      <div class="col-md-4 col-md-offset-4 text-center">
        <p>{{cityState}}</p>
        <p>{{forecastDay.desc}}</p>
        <p><label>Max Temperature:</label> {{forecastDay.maxTemp}} °F</p>
        <p><label>Min Temperature:</label> {{forecastDay.minTemp}} °F</p>
        <p><label>Humidity:</label> {{forecastDay.humidity}}%</p>
      </div>
    </div>
  `,
  styleUrls: ['./forecast-detail.component.css']
})
export class ForecastDetailComponent implements OnInit {

  private cityState: string;
  private forecastDay: ForecastDay;

  constructor(private route: ActivatedRoute,
              private forecastCachingService: ForecastCachingService) { }

  ngOnInit() {
    this.cityState = this.route.snapshot.params['cityState'];

    let id = this.route.snapshot.params['id'];
    this.forecastDay = this.forecastCachingService.getForecastDayById(id);
  }
}
