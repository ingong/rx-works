import { inject } from '@angular/core';
import type { CanActivateFn } from '@angular/router';
import { AuthService } from '@app/core/http';
import { map, first } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.authState$.pipe(
    first(),
    map((authState) => authState !== null)
  );
};
