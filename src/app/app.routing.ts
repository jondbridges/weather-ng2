import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ForecastContainerComponent } from './components/forecast/forecast-container.component';
import { DetailComponent } from './components/detail/detail.component';

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
    path: 'detail/:cityState/:id',
    component: DetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
