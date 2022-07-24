import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export abstract class HttpRequestService {
  readonly ROOT_URL;

  constructor(protected http: HttpClient) {
    this.ROOT_URL = 'https://api-estudy-bazar.herokuapp.com';
  }

  protected get<T>(uri: string, params?: HttpParams) {
    return this.http.get<T>(`${this.ROOT_URL}/${uri}`, { params: params });
  }

  protected post<T>(uri: string, payload: Object) {
    return this.http.post<T>(`${this.ROOT_URL}/${uri}`, payload);
  }

  protected patch<T>(uri: string, payload: Object) {
    return this.http.patch<T>(`${this.ROOT_URL}/${uri}`, payload);
  }

  protected delete<T>(uri: string) {
    return this.http.delete<T>(`${this.ROOT_URL}/${uri}`);
  }
}
