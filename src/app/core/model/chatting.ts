import { Timestamp, FieldValue } from '@angular/fire/firestore';

export type Chatting = {
  id: string;
  uid: string;
  title: string;
  created: Timestamp | FieldValue;
};

export type NewChatting = Omit<Chatting, 'id' | 'created'> & {
  created?: FieldValue;
};
