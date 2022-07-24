import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { HttpRequestService } from './http-request.service';
import { Chat } from '../types/chat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService extends HttpRequestService {
  private url = {
    root: 'api/chats',
    sendMessage: 'api/chats/message',
  };

  constructor(http: HttpClient) {
    super(http);
  }

  getChats(productId: string): Observable<Chat[]> {
    const productIdParam = new HttpParams().set('productId', productId);

    return this.get<Chat[]>(this.url.root, productIdParam);
  }

  getChatState(chatId: string): Observable<Chat> {
    const chatIdParam = new HttpParams().set('id', chatId);

    return this.get<Chat>(`${this.url.root}/change`, chatIdParam);
  }

  createChat(payload: any): Observable<Chat[]> {
    return this.post(`${this.url.root}`, payload);
  }

  sendMessage(payload: any) {
    return this.post(`${this.url.sendMessage}`, payload);
  }

  patchChat(id: string, payload: any): Observable<Chat> {
    return this.patch(`${this.url.root}/${id}`, payload);
  }

  deleteChat(id: number) {
    return this.delete(`${this.url.root}/${id}`);
  }
}
