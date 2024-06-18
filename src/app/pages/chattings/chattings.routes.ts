import { Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard';
import { redirectUnauthorizedToLogin } from '@app/shared/guard';

export const chattingsRoutes: Routes = [
  {
    path: 'chattings',
    canActivate: [AuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./chattings.component').then(
            ({ ChattingsComponent }) => ChattingsComponent
          ),
      },
      {
        path: ':chattingId',
        loadComponent: () =>
          import('./chatting/chatting.component').then(
            ({ ChattingComponent }) => ChattingComponent
          ),
      },
      {
        path: 'new/edit',
        loadComponent: () =>
          import('./chattings-write/chattings-write.component').then(
            ({ ChattingsWriteComponent }) => ChattingsWriteComponent
          ),
      },
    ],
  },
];
