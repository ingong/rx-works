import { Timestamp, FieldValue } from '@angular/fire/firestore';

export type Message = {
  chattingId: string;
  id: string;
  body: string;
  created: Timestamp;
};

export type NewMessage = Omit<Message, 'id' | 'created'> & {
  created?: FieldValue;
};
