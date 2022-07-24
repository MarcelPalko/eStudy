import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { passwordMatcherValidator } from '../validators/password.validator';
import { AuthService } from '../services/auth.service';
import { ReplaySubject, of } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

const REGISTER_FORM: { [key: string]: FormControl } = {
  ['username']: new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]),
  ['reEnterPassword']: new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]),
  ['class']: new FormControl('', [
    Validators.minLength(4),
    Validators.maxLength(4),
  ]),
  ['gdprCheck']: new FormControl(Validators.required),
};

const LOGIN_FORM: { [key: string]: FormControl } = {
  ['email']: new FormControl('', [
    Validators.minLength(5),
    Validators.email,
    Validators.required,
  ]),
  ['password']: new FormControl('', [
    Validators.minLength(5),
    Validators.required,
  ]),
};

@Component({
  selector: 'estudy-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  isLogin: boolean = this.router.url === '/login' ? true : false;
  isCheckingProperties: { [key: string]: boolean } = {
    ['username']: false,
    ['email']: false,
  };
  checkedProperties: { [key: string]: boolean } = {
    ['username']: false,
    ['email']: false,
  };
  wrongCredentials: boolean = false;

  form: FormGroup = new FormGroup(LOGIN_FORM);

  private unsubscribe: ReplaySubject<void> = new ReplaySubject<void>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.isLogin && this.form?.controls?.username) {
      this.removeRegisterFormControls();
    } else if (!this.isLogin) {
      this.createRegisterForm();
    }

    this.form.reset();
  }

  doActionBasedOnRoute(register: boolean): void {
    if (this.isLogin && !register) {
      this.loginUser();
    } else if (this.isLogin && register) {
      this.redirectToRegister();
    } else {
      this.registerUser();
    }
  }

  createRegisterForm(): void {
    Object.entries(REGISTER_FORM).forEach(([formControlName, formcontrol]) => {
      this.form.addControl(formControlName, formcontrol);
    });

    this.form.setValidators(passwordMatcherValidator);
  }

  removeRegisterFormControls(): void {
    Object.keys(REGISTER_FORM).forEach((formControlName) => {
      this.form.removeControl(formControlName);
    });
  }

  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }

  checkUsername(event): void {
    if (!this.isLogin) this.checkFromProperties(event, 'username');
  }

  checkEmail(event): void {
    if (!this.isLogin) this.checkFromProperties(event, 'email');
  }

  checkFromProperties(event: Event, property: string): void {
    if (event) {
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
          } else {
            this.checkedProperties[property] = false;
            this.form['controls'][property].setErrors({ invalid: true });
          }

          this.isCheckingProperties[property] = false;
        });
    }
  }

  loginUser(): void {
    if (this.form.valid) {
      const user = {
        email: this.form.value.email.toLocaleLowerCase(),
        password: this.form.value.password,
      };

      this.authService
        .authenticateUser(user)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
          (user) => {
            if (user) {
              this.router.navigate(['/products']);
            }
          },
          (err: HttpErrorResponse) => {
            if (err.status === 401) {
              this.wrongCredentials = true;
              this.form.reset();
            }
          }
        );
    }
  }

  registerUser(): void {
    if (this.form.valid) {
      const user = {
        username: this.form.value.username,
        email: this.form.value.email.toLocaleLowerCase(),
        password: this.form.value.password,
        class: this.form.value?.class.length > 0 ? this.form.value.class : null,
      };

      this.authService
        .registerUser(user)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((user) => {
          if (user) {
            this.form.reset();
            this.form = new FormGroup(LOGIN_FORM);
            this.router.navigate(['/products']);
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
