import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteProductsPageComponent } from './favourite-products-page.component';

describe('FavouriteProductsPageComponent', () => {
  let component: FavouriteProductsPageComponent;
  let fixture: ComponentFixture<FavouriteProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavouriteProductsPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
