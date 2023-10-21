import { Route } from '@angular/router';
import { TemplatesModule } from '@cp/templates';

export const appRoutes: Route[] = [
  {
    path: '',
    component: TemplatesModule,
    pathMatch: 'full'
  }
];
