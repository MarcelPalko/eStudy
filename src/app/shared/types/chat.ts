export interface Message {
  _id: string;
  authorId: string;
  text: string;
  status: string;
  createdAt: string;
}

export interface Chat {
  _id: string;
  userIds: string[];
  productId: string;
  messages: Message[];

  changedDate: string;
  createdAt: string;
  updatedAt: string;
}
