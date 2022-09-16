import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { HttpRequestService } from './http-request.service';
import { Product } from '../types/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends HttpRequestService {
  private URL = 'api/products';
  public readonly AWS_URL =
    'https://estudy-bucket.s3.eu-central-1.amazonaws.com/';

  constructor(http: HttpClient) {
    super(http);
  }

  getProducts(params?: HttpParams): Observable<Product[]> {
    return this.get<Product[]>(this.URL, params).pipe(
      map((products) => {
        const productsWithImagesURL = products.map((product) => {
          return {
            ...product,
            images: product.images.map((image) => `${this.AWS_URL}${image}`),
          };
        });

        return productsWithImagesURL;
      })
    );
  }

  postProducts(product: FormData) {
    return this.post(`${this.URL}`, product);
  }

  patchProduct(id: string, payload: any): Observable<Product> {
    return this.patch(`${this.URL}/${id}`, payload);
  }

  deleteProduct(id: string) {
    return this.delete(`${this.URL}/${id}`);
  }

  /** ACTIONS */
  getLastChange(): Observable<{ _id: string; productsLastChange: string }> {
    return this.get(`${this.URL}/last-change`);
  }
}
