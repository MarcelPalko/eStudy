import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { trigger, style, transition, animate } from '@angular/animations';

import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

import { of, ReplaySubject, timer } from 'rxjs';
import { mergeMap, takeUntil, delay, filter, tap } from 'rxjs/operators';
import { User } from '../shared/types/user';
import { Product } from '../shared/types/product';

@Component({
  selector: 'estudy-favourite-products-page',
  templateUrl: './favourite-products-page.component.html',
  styleUrls: ['./favourite-products-page.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('320ms 150ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('280ms 150ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class FavouriteProductsPageComponent implements OnInit, OnDestroy {
  user: User = null;
  productsToRemove: Product[] = [];

  isLoading: boolean = false;

  private unsubscribe: ReplaySubject<void> = new ReplaySubject<void>();

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = new HttpParams().set('_id', this.authService.getUser()._id);
    this.isLoading = true;

    this.userService
      .getUsers(idParam)
      .pipe(delay(1500), takeUntil(this.unsubscribe))
      .subscribe((user) => {
        this.user = user[0] || null;
        this.isLoading = false;
        this.userService.userPropertiesChanged$.next(user[0]);

        /** #TODO - User save to localStorage on change */
        this.authService.setUser(user[0]);
      });

    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart && !event.url.includes('favourite')
        ),
        tap(() => this.removeProducts()),
        takeUntil(this.unsubscribe)
      )
      .subscribe();
  }

  removeProduct(index: number) {
    const removedProduct = this.user.favouriteProducts[index];
    this.productsToRemove.push(removedProduct);
    this.user.favouriteProducts.splice(index, 1);

    timer(7000)
      .pipe(
        mergeMap(() => {
          if (
            this.productsToRemove.find(
              (product) => product._id === removedProduct._id
            )
          ) {
            return this.userService.patchUser(this.user._id, { ...this.user });
          }

          return of(null);
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe((user) => {
        if (user && this.productsToRemove.length > 0) {
          this.productsToRemove.shift();
          this.user = user;
          this.authService.setUser(user);
          this.userService.userPropertiesChanged$.next(user);
        }
      });
  }

  removeProducts() {
    this.userService
      .patchUser(this.user._id, { ...this.user })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((user) => {
        this.user = user;
        this.authService.setUser(user);
        this.userService.userPropertiesChanged$.next(user);
      });
  }

  returnProductBack(index: number): void {
    const removedProduct = this.productsToRemove[index];

    this.productsToRemove.splice(index, 1);
    this.user.favouriteProducts.splice(index, 0, removedProduct);
  }

  showProductDetail(index: number): void {
    this.router.navigate([
      `/products/${this.user.favouriteProducts[index]._id}`,
    ]);
  }

  returnToProducts(): void {
    this.router.navigate(['/products']);
  }

  cycleFor(range: number): number[] {
    return Array(range).map((x, i) => i);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
