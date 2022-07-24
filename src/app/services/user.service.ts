import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { HttpRequestService } from './http-request.service';
import { User } from '../types/user';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService extends HttpRequestService {
  private url = 'api/users';
  public userPropertiesChanged$: ReplaySubject<User> =
    new ReplaySubject<User>();

  constructor(http: HttpClient) {
    super(http);
  }

  getUsers(params?: any): Observable<User[]> {
    return this.get<User[]>(this.url + '?' + params);
  }

  patchUser(id: string, payload: any): Observable<User> {
    return this.patch(`${this.url}/${id}`, payload);
  }

  deleteUser(id: number) {
    return this.delete(`${this.url}/${id}`);
  }
}
