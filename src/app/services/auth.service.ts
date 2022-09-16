import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { User } from '../types/user';
import { Observable } from 'rxjs';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USER_KEY = 'USER';

  private AUTH_ROUTE = 'https://api-estudy-bazar.herokuapp.com/api/auth';
  private loginUrl = `${this.AUTH_ROUTE}/login`;
  private registerUrl = `${this.AUTH_ROUTE}/register`;

  constructor(private http: HttpClient) {}

  public authenticateUser(user: { email: string; password: string }) {
    return this.http
      .post<User & { token: string }>(this.loginUrl, { ...user }, HTTP_OPTIONS)
      .pipe(
        tap((result) => {
          if (result.token.length > 0) {
            const { token, ...user } = result;

            this.setToken(token);
            this.setUser(user);
          }
        })
      );
  }

  public registerUser(user: {
    username: string;
    email: string;
    password: string;
    class?: string;
  }) {
    return this.http
      .post<User & { token: string }>(
        this.registerUrl,
        { ...user },
        HTTP_OPTIONS
      )
      .pipe(
        tap((result) => {
          if (result.token.length > 0) {
            const { token, ...user } = result;

            this.setToken(token);
            this.setUser(user);
          }
        })
      );
  }

  public checkPassowrd(password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.AUTH_ROUTE}/check-password`, {
      password: password,
    });
  }

  public changePassowrd(password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.AUTH_ROUTE}/change-password`, {
      newPassword: password,
    });
  }

  private setToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  public getToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  public removeToken() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  public setUser(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    const user = localStorage.getItem(this.USER_KEY);

    return user ? JSON.parse(user) : null;
  }

  public removeUser() {
    localStorage.removeItem(this.USER_KEY);
  }
}
