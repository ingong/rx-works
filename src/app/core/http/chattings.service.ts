import { Injectable, inject } from '@angular/core';
import { Chatting, NewChatting } from '../model/chatting';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  serverTimestamp,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

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

  getChattings() {
    // collectionReference를 인자로 전달
    // observable을 return
    return collectionData(collection(this.#fireStore, this.#path), {
      idField: 'id',
    }) as Observable<Chatting[]>;
  }
}
