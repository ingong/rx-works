import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth.component').then(({ AuthComponent }) => AuthComponent),
  },
];
