import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { trigger, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

import { ReplaySubject, of, combineLatest } from 'rxjs';
import { takeUntil, switchMap, delay } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../types/user';
import { passwordMatcherValidator } from '../validators/password.validator';
import { Product } from '../types/product';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { FeatureItemCreationDialogComponent } from '../feature-components/feature-item-creation-dialog/feature-item-creation-dialog.component';

const PASSWORD_FORM: { [key: string]: FormControl } = {
  ['oldPassword']: new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]),
  ['password']: new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]),
  ['reEnterPassword']: new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]),
};

@Component({
  selector: 'estudy-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
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
    trigger('delete', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '280ms 150ms ease-in',
          style({ opacity: 0, minHeight: 0, height: 0 })
        ),
      ]),
    ]),
  ],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  user: User = null;
  uploadedProducts: Product[] = [];
  indexOfEditedProduct: number = -1;

  isUpdating: boolean = false;
  isPasswordFormVisible: boolean = false;
  isCheckingProperties: { [key: string]: boolean } = {
    ['username']: false,
    ['email']: false,
    ['oldPassword']: false,
  };
  checkedProperties: { [key: string]: boolean } = {
    ['username']: false,
    ['email']: false,
    ['oldPassword']: false,
  };
  updated: boolean = false;
  glowUpButton: boolean = false;
  useMobileView: boolean = window.innerWidth <= 1024;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', Validators.email),
    class: new FormControl(''),
  });

  private unsubscribe: ReplaySubject<void> = new ReplaySubject<void>();

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.form.setValue({
      username: this.user.username,
      email: this.user.email,
      class: this.user.class?.length > 0 ? this.user.class : '',
    });

    const userId = new HttpParams().set('userId', this.user._id);
    this.productService
      .getProducts(userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((products) => {
        if (products?.length > 0) {
          this.uploadedProducts = products;
        }
      });
  }

  tabChanged(selectedIndex) {
    this.glowUpButton =
      selectedIndex === 1 && this.uploadedProducts.length <= 0;
  }

  hidePasswordForm() {
    this.isPasswordFormVisible = false;
    this.checkedProperties['oldPassword'] = false;

    this.form.setValidators(null);
    Object.keys(PASSWORD_FORM).forEach((formControlName) => {
      this.form.removeControl(formControlName);
    });
  }

  showPasswordForm() {
    Object.entries(PASSWORD_FORM).forEach(([formControlName, formcontrol]) => {
      formcontrol = new FormControl('');
      this.form.addControl(formControlName, formcontrol);
    });
    this.form.setValidators(passwordMatcherValidator);

    this.form.setErrors({ invalid: true });
    this.isPasswordFormVisible = true;
  }

  checkUsername(event): void {
    this.checkFromProperties(event, 'username');
  }

  checkEmail(event): void {
    this.checkFromProperties(event, 'email');
  }

  checkOldPassword(event) {
    if (
      event &&
      this.form.value.oldPassword.length > 0 &&
      this.form.controls.oldPassword.valid
    ) {
      this.form['controls']['oldPassword'].setErrors({ invalid: true });
      this.isCheckingProperties['oldPassword'] = true;

      of(event)
        .pipe(
          switchMap((formChange) => {
            if (formChange) {
              return this.authService.checkPassowrd(
                this.form.value.oldPassword
              );
            }
          }),
          takeUntil(this.unsubscribe)
        )
        .subscribe((isOldPasswordCorrect) => {
          if (isOldPasswordCorrect) {
            this.checkedProperties['oldPassword'] = true;
            this.form['controls']['oldPassword'].setErrors(null);
          } else {
            this.checkedProperties['oldPassword'] = false;
          }

          this.isCheckingProperties['oldPassword'] = false;
        });
    }
  }

  hasPropertyChanged(property: string): boolean {
    return this.user[property] !== this.form.value[property];
  }

  checkFromProperties(event: Event, property: string): void {
    if (event && this.hasPropertyChanged(property)) {
      this.form['controls'][property].setErrors({ invalid: true });
      this.isCheckingProperties[property] = true;

      of(event)
        .pipe(
          switchMap((formChange) => {
            if (formChange) {
              const propertyParam = new HttpParams().set(
                property,
                this.form.value[property]
              );
              return this.userService.getUsers(propertyParam);
            }
          }),
          takeUntil(this.unsubscribe)
        )
        .subscribe((foundUsers) => {
          if (foundUsers?.length === 0) {
            this.checkedProperties[property] = true;
            this.form['controls'][property].setErrors(null);
          } else {
            this.checkedProperties[property] = false;
          }

          this.isCheckingProperties[property] = false;
        });
    }
  }

  deleteProduct(index: number) {
    this.productService
      .deleteProduct(this.uploadedProducts[index]._id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.uploadedProducts.splice(index, 1);
      });
  }

  editProduct(index: number) {
    const dialogRef = this.dialog.open(FeatureItemCreationDialogComponent, {
      height: '80vh',
      width: '70vw',
      data: this.uploadedProducts[index],
    });

    dialogRef.afterClosed().subscribe((product) => {
      if (product) {
        this.uploadedProducts[index] = product;
      }
    });
  }

  showProductDetail(index: number) {
    this.router.navigate([`/products/${this.uploadedProducts[index]._id}`]);
  }

  onSubmit() {
    if (this.form.valid) {
      this.isUpdating = true;
      const userToUpdate = {
        ...this.user,
        username: this.hasPropertyChanged('username')
          ? this.form.value.username
          : this.user.username,
        email: this.hasPropertyChanged('email')
          ? this.form.value.email
          : this.user.email,
        class: this.hasPropertyChanged('class')
          ? this.form.value.class
          : this.user.class,
      };
      const password = this.form.value?.password || null;

      combineLatest([
        this.userService.patchUser(this.user._id, userToUpdate),
        password ? this.authService.changePassowrd(password) : of(null),
      ])
        .pipe(delay(1500), takeUntil(this.unsubscribe))
        .subscribe(([user, changedPassword]) => {
          if (user) {
            this.user = user;
            this.authService.setUser(user);
            this.form.controls['username'].setValue(user.username, {
              emitEvent: false,
            });
            this.form.controls['email'].setValue(user.email, {
              emitEvent: false,
            });
            this.form.controls['class'].setValue(user.class, {
              emitEvent: false,
            });
          }

          if (changedPassword) {
            this.hidePasswordForm();
          }

          this.updated = true;
          this.isUpdating = false;
          setTimeout(() => {
            this.updated = false;
          }, 20000);
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
