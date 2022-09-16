import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';

import { Product } from '../../types/product';
import { User } from '../../types/user';
import { Notification, ICON_BY_TYPES } from '../../types/notification';
import { AuthService } from '../../services/auth.service';
import { FeatureItemCreationDialogComponent } from '../feature-item-creation-dialog/feature-item-creation-dialog.component';
import { UserService } from '../../services/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'estudy-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({ opacity: 1, display: 'flex' })),
      state('hide', style({ opacity: 0, display: 'none' })),
      transition('show <=> hide', [animate('280ms')]),
    ]),
  ],
})
export class UiHeaderComponent implements OnInit, OnDestroy {
  @Input() form: FormGroup = null;
  @Input() glowUpAddButton: boolean = false;
  @Input() randomPlaceholder: string = '';

  @Output() loggedOut = new EventEmitter<boolean>();
  @Output() createdProduct = new EventEmitter<boolean>();

  favouriteItems: Product[] = [];
  notifications: Notification[] = [];
  icons = ICON_BY_TYPES;

  inputIsExpanded: boolean = false;
  loggedUser: User = null;
  useMobileView: boolean = false;
  isLoginOrRegister: boolean =
    this.router.url === '/login' || this.router.url === '/register'
      ? true
      : false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.useMobileView = event.target.innerWidth <= 1024;
  }

  private unsubscribe: ReplaySubject<void> = new ReplaySubject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getUser() || null;

    this.useMobileView = window.innerWidth <= 1024;

    if (this.loggedUser) {
      this.userService.userPropertiesChanged$.next(null);
      this.userService.userPropertiesChanged$
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((changedUser) => {
          if (
            changedUser &&
            changedUser.updatedAt !== this.loggedUser.updatedAt
          ) {
            this.authService.setUser(changedUser);
            this.loggedUser = changedUser;
          }

          if (this.loggedUser?._id) {
            this.favouriteItems = this.loggedUser.favouriteProducts;
            this.notifications = this.loggedUser.notifications;
          }
        });
    }
  }

  toggleExpandInput(): void {
    this.inputIsExpanded = !this.inputIsExpanded;
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }

  redirectToProducts(): void {
    if (window.location.pathname === '/products') {
      window.location.reload();
    } else {
      this.router.navigate(['/products']);
    }
  }

  redirectToFavouriteProducts(): void {
    this.router.navigate(['/products/favourite']);
  }

  createItem(): void {
    if (this.loggedUser) {
      const dialogRef = this.dialog.open(FeatureItemCreationDialogComponent, {
        height: '80vh',
        width: '70vw',
      });

      dialogRef.afterClosed().subscribe((event) => {
        this.createdProduct.emit(event);
      });
    } else {
      this.redirectToLogin();
    }
  }

  logoutUser() {
    window.localStorage.clear();
    this.redirectToProducts();
  }

  editProfile() {
    this.router.navigate(['/profile']);
  }

  deleteNotification(index: number) {
    this.notifications.splice(index, 1);

    this.userService
      .patchUser(this.loggedUser._id, {
        ...this.loggedUser,
        notifications: this.notifications,
      })
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {});
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
