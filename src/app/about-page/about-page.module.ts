import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatChipsModule } from '@angular/material/chips';

import { UiHeaderModule } from '../shared/components/ui-header/ui-header.module';
import { AboutPageComponent } from './about-page.component';

const routes: Routes = [{ path: '', component: AboutPageComponent }];

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatChipsModule,
    UiHeaderModule,
  ],
})
export class AboutPageModule {}
