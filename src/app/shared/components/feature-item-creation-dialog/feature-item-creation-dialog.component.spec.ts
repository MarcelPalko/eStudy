import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureItemCreationDialogComponent } from './feature-item-creation-dialog.component';

describe('FeatureItemCreationDialogComponent', () => {
  let component: FeatureItemCreationDialogComponent;
  let fixture: ComponentFixture<FeatureItemCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureItemCreationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureItemCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
