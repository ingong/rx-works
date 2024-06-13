import { Routes } from '@angular/router';
import { chattingsRoutes } from './pages/chattings/chattings.routes';
import { authRoutes } from './pages/auth/auth.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chattings',
    pathMatch: 'full',
  },
  ...chattingsRoutes,
  ...authRoutes,
];
