import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@app/core/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  readonly #authService = inject(AuthService);
  user$ = this.#authService.user$;

  async onClickSignOut() {
    await this.#authService.signOut();
  }

  async onClickSignIn() {
    await this.#authService.signInAnonymously();
  }
}
