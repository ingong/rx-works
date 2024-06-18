// 미사용 파일
import { inject } from '@angular/core';
import { RedirectCommand, Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '@app/core/http';
import { isNotNil } from 'rambda';
import { map, first, tap, filter } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authState$.pipe(
    first(),
    map(isNotNil),
    map((isSignin) => isSignin || new RedirectCommand(router.parseUrl('/auth')))
  );
};
