import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { FeatureItemCreationDialogComponent } from './feature-item-creation-dialog.component';

@NgModule({
  declarations: [FeatureItemCreationDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
  ],
  exports: [FeatureItemCreationDialogComponent],
})
export class FeatureItemCreationDialogModule {}
