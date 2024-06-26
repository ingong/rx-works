import { Injectable, inject } from '@angular/core';
import { Chatting, NewChatting } from '../model/chatting';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  orderBy,
  query,
  serverTimestamp,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message, NewMessage } from '../model/message';

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

  getChattings(uid: string | null) {
    const ref = collection(this.#fireStore, this.#path);
    const _query = uid
      ? query(ref, where('uid', '==', uid), orderBy('created', 'desc'))
      : query(ref, orderBy('created', 'desc'));

    // collectionReference를 인자로 전달
    // observable을 return
    return collectionData(_query, {
      idField: 'id',
    }) as Observable<Chatting[]>;
  }

  addMessage(chattingId: string, message: NewMessage) {
    return addDoc(
      collection(this.#fireStore, this.#path, chattingId, 'messages'),
      message
    );
  }

  getMessages(chattingId: string) {
    const ref = collection(this.#fireStore, this.#path, chattingId, 'messages');
    const _query = query(ref, orderBy('created', 'asc'));

    return collectionData(_query, { idField: 'id' }) as Observable<Message[]>;
  }
}
