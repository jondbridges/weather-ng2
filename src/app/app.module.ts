import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherService } from './services/weather.service';
import { ForecastCachingService } from './services/forecast-caching.service';
import { ForecastContainerComponent } from './components/forecast/forecast-container.component';
import { ForecastDayComponent } from './components/forecast/forecast-day.component';
import { DetailComponent } from './components/detail/detail.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ForecastContainerComponent,
    ForecastDayComponent,
    DetailComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
    WeatherService,
    ForecastCachingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
