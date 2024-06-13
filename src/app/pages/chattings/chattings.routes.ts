import { Routes } from '@angular/router';

export const chattingsRoutes: Routes = [
  {
    path: 'chattings',
    loadComponent: () =>
      import('./chattings.component').then((c) => c.ChattingsComponent),
  },
  {
    path: 'chattings/new/edit',
    loadComponent: () =>
      import('./chattings-write/chattings-write.component').then(
        (c) => c.ChattingsWriteComponent
      ),
  },
];
