import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { UiHeaderModule } from '../ui-components/ui-header/ui-header.module';
import { UiFooterModule } from '../ui-components/ui-footer/ui-footer.module';
import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [{ path: '', component: ProfilePageComponent }];

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,

    UiHeaderModule,
    UiFooterModule,
  ],
})
export class ProfilePageModule {}
