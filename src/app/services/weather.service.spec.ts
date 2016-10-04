import {Http, HttpModule, BaseRequestOptions, ConnectionBackend, Response, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {TestBed, inject, tick, fakeAsync} from '@angular/core/testing';
import {ForecastDay} from "../models/forecast-day.model";
import { WeatherService, FORECAST_URL } from './weather.service';
import weatherServiceTestData from './weather.service.testdata';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]
        },
        {provide: WeatherService, useClass: WeatherService},
        {provide: MockBackend, useClass: MockBackend},
        {provide: BaseRequestOptions, useClass: BaseRequestOptions}
      ]
    });
  });

  it('it should return the list of five forecast days',
    inject([WeatherService, MockBackend], fakeAsync((weatherService: WeatherService, mockBackend: MockBackend) => {

      let forecastDays: ForecastDay[];
      let cityName: string = 'St. Louis, MO';

      mockBackend.connections.subscribe(c => {
        expect(c.request.url).toBe(FORECAST_URL + '&q=' + cityName + '&cnt=5');
        let response = new ResponseOptions({body: weatherServiceTestData});
        c.mockRespond(new Response(response));
      });

      weatherService.getForecast(cityName).then((days) => {
        forecastDays = days;
      });
      tick();

      expect(forecastDays.length).toBe(5);
      expect(forecastDays[0].id).toBe(1475082000);
      expect(forecastDays[1].id).toBe(1475168400);
      expect(forecastDays[2].id).toBe(1475254800);
      expect(forecastDays[3].id).toBe(1475341200);
      expect(forecastDays[4].id).toBe(1475427600);
  }))
  );
});
