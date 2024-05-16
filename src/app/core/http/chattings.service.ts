import { Injectable, inject } from '@angular/core';
import { NewChatting } from '../model/chatting';
import {
  Firestore,
  addDoc,
  collection,
  serverTimestamp,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChattingsService {
  readonly #path = 'chattings';
  readonly #fireStore = inject(Firestore);

  constructor() {}

  addChattings(chatting: NewChatting) {
    chatting = {
      ...chatting,
      created: serverTimestamp(),
    };

    return addDoc(collection(this.#fireStore, this.#path), chatting);
  }
}
