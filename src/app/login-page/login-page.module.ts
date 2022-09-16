import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { UiHeaderModule } from '../shared/components/ui-header/ui-header.module';
import { UiFooterModule } from '../shared/components/ui-footer/ui-footer.module';
import { LoginPageComponent } from './login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'register', component: LoginPageComponent },
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,

    UiHeaderModule,
    UiFooterModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
