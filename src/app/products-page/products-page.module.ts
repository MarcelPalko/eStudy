import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { UiHeaderModule } from '../ui-components/ui-header/ui-header.module';
import { UiFooterModule } from '../ui-components/ui-footer/ui-footer.module';

import { ProductsPageComponent } from './products-page.component';
import { ProductDetailPageComponent } from '../product-detail-page/product-detail-page.component';
import { FavouriteProductsPageComponent } from '../favourite-products-page/favourite-products-page.component';
import { AuthGuard } from '../interceptors/aut.guard';
import { UiProductDetailImagesDialogModule } from '../ui-components/ui-product-detail-images-dialog/ui-product-detail-images-dialog.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
  },
  {
    path: 'favourite',
    canActivate: [AuthGuard],
    component: FavouriteProductsPageComponent,
  },
  { path: ':id', component: ProductDetailPageComponent },
];

@NgModule({
  declarations: [
    ProductsPageComponent,
    FavouriteProductsPageComponent,
    ProductDetailPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FlexLayoutModule,
    UiHeaderModule,
    UiFooterModule,

    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatTooltipModule,
    MatMenuModule,
  
    UiProductDetailImagesDialogModule
  ],
})
export class ProductsPageModule {}
