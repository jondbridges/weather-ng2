import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ForecastComponent } from './components/forecast/forecast.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forecast/:cityState',
    component: ForecastComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
