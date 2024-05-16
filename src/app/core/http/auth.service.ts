import { Injectable, inject } from '@angular/core';
import { Auth, signInAnonymously } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #auth = inject(Auth);

  async signInAnonymously() {
    const credential = await signInAnonymously(this.#auth);
    console.log(credential);
  }
}
