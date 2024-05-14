import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chattings',
    pathMatch: 'full',
  },
  {
    path: 'chattings',
    loadComponent: () =>
      import('./pages/chattings/chattings.component').then(
        (c) => c.ChattingsComponent
      ),
  },
  {
    path: 'chattings/new/edit',
    loadComponent: () =>
      import('./pages/chattings-write/chattings-write.component').then(
        (c) => c.ChattingsWriteComponent
      ),
  },
];
