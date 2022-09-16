import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { HttpRequestService } from './http-request.service';
import { User } from '../types/user';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends HttpRequestService {
  private url = 'api/users';
  public userPropertiesChanged$: ReplaySubject<User> =
    new ReplaySubject<User>();

  constructor(http: HttpClient, private authService: AuthService) {
    super(http);
  }

  getUsers(params?: any): Observable<User[]> {
    return this.get<User[]>(this.url + '?' + params).pipe(
      map((users: User[]) => {
        if (params?._id && this.authService.getUser()._id === params._id) {
          this._setUserToLocalStorage(users[0]);
        }

        return users;
      })
    );
  }

  patchUser(id: string, payload: any): Observable<User> {
    return this.patch(`${this.url}/${id}`, payload).pipe(
      map((user: User) => {
        this._setUserToLocalStorage(user);

        return user;
      })
    );
  }

  deleteUser(id: number) {
    return this.delete(`${this.url}/${id}`);
  }

  private _setUserToLocalStorage(user) {
    this.authService.removeUser();
    this.authService.setUser(user);
    this.userPropertiesChanged$.next(user);
  }
}
