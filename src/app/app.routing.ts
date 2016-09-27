import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ForecastContainerComponent } from './components/forecast/forecast-container.component';
import { ForecastDetailComponent } from './components/forecast/forecast-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'forecast/:cityState',
    component: ForecastContainerComponent
  },
  {
    path: 'forecast/:cityState/:id',
    component: ForecastDetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
