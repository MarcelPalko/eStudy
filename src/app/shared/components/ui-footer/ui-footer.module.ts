import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';

import { UiFooterComponent } from './ui-footer.component';

@NgModule({
  declarations: [UiFooterComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule],
  exports: [UiFooterComponent],
})
export class UiFooterModule {}
