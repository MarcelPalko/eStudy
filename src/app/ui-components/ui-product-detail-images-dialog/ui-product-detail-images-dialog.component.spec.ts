import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProductDetailImagesDialogComponent } from './ui-product-detail-images-dialog.component';

describe('UiProductDetailImagesDialogComponent', () => {
  let component: UiProductDetailImagesDialogComponent;
  let fixture: ComponentFixture<UiProductDetailImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiProductDetailImagesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiProductDetailImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
