import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UiHeaderModule } from '../ui-header/ui-header.module';
import { AboutPageComponent } from './about-page.component';

const routes: Routes = [{ path: '', component: AboutPageComponent }];

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    UiHeaderModule,
  ],
})
export class AboutPageModule {}
