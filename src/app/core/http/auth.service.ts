import { Injectable, inject } from '@angular/core';
import { Auth, authState, signInAnonymously, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #auth = inject(Auth);
  user$ = user(this.#auth);
  authState$ = authState(this.#auth);

  async signInAnonymously() {
    const credential = await signInAnonymously(this.#auth);
    console.log(credential);
  }
}
