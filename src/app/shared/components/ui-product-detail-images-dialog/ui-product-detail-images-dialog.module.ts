import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UiProductDetailImagesDialogComponent } from './ui-product-detail-images-dialog.component';

@NgModule({
  declarations: [
    UiProductDetailImagesDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [UiProductDetailImagesDialogComponent]
})
export class UiProductDetailImagesDialogModule { }
