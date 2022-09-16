import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'estudy-ui-product-detail-images-dialog',
  templateUrl: './ui-product-detail-images-dialog.component.html',
  styleUrls: ['./ui-product-detail-images-dialog.component.scss']
})
export class UiProductDetailImagesDialogComponent {
  public selectedImage = 0;

  constructor(
    public dialogRef: MatDialogRef<UiProductDetailImagesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public imagesList: string[],
  ) { }

  public setSelectedImage(index: number): void {
    this.selectedImage = index;
  }

  public exitDialog(): void {
    this.dialogRef.close();
  }

}
