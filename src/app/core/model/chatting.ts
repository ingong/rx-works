import { Timestamp, FieldValue } from '@angular/fire/firestore';

export type Chatting = {
  id: string;
  uid: string;
  title: string;
  created: Timestamp;
};

export type NewChatting = Omit<Chatting, 'id' | 'created'> & {
  created?: FieldValue;
};
