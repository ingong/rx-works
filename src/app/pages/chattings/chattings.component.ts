import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ChattingsService } from '@app/core/http';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { FsTimestampToDistancePipe } from '@app/shared/pipe';
import { tap, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-chattings',
  standalone: true,
  imports: [AsyncPipe, FsTimestampToDistancePipe, RouterLink, SlicePipe],
  templateUrl: './chattings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsComponent {
  readonly #chattingsService = inject(ChattingsService);
  readonly #activateRoute = inject(ActivatedRoute);
  readonly uid$ = this.#activateRoute.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('uid'))
  );

  // asyncPipe는 알아서 구독을 하게 함 .
  chattings$ = this.uid$.pipe(
    switchMap((uid) => this.#chattingsService.getChattings(uid))
  );
}
