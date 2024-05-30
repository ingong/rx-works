import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChattingsService } from '@app/core/http';
import { AsyncPipe } from '@angular/common';
import { FsTimestampToDistancePipe } from '@app/shared/pipe';
import { tap } from 'rxjs';

@Component({
  selector: 'app-chattings',
  standalone: true,
  imports: [AsyncPipe, FsTimestampToDistancePipe, RouterLink],
  templateUrl: './chattings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChattingsComponent {
  readonly #chattingsService = inject(ChattingsService);

  chattings$ = this.#chattingsService
    .getChattings()
    .pipe(tap((e) => console.log(e)));
}
