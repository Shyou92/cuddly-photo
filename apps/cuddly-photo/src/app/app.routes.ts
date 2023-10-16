import { Route } from '@angular/router';
import { TopbarComponent } from '@cp/features';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TopbarComponent,
    pathMatch: 'full'
  }
];
