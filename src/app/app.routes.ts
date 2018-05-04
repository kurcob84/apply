import {Routes} from '@angular/router';
import * as components from './components/index';
import * as guards from './guards/index';


export const appRoutes: Routes = [
    {
      path: 'home',
      component: components.HomeComponent,
      canActivate: [guards.LoginRouteGuard]
    },
    {
      path: 'jobs',
      component: components.JobsComponent,
      canActivate: [guards.LoginRouteGuard]
    },
    {
      path: '',
      component: components.HomeComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      component: components.HomeComponent,
      pathMatch: 'full'
    }

];
