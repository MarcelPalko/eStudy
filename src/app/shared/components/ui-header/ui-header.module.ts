import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { UiHeaderComponent } from './ui-header.component';
import { FeatureItemCreationDialogModule } from '../feature-item-creation-dialog/feature-item-creation-dialog.module';

@NgModule({
  declarations: [UiHeaderComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,
    FeatureItemCreationDialogModule,
  ],
  exports: [UiHeaderComponent],
})
export class UiHeaderModule {}
