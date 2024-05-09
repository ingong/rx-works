export type Chatting = {
  id: string;
  title: string;
  // created: Timestamp
};

export type NewChatting = Omit<Chatting, 'id'>;
