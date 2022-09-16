import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  HostListener,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
import { of, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil, map, tap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../types/product';

@Component({
  selector: 'estudy-feature-item-creation-dialog',
  templateUrl: './feature-item-creation-dialog.component.html',
  styleUrls: ['./feature-item-creation-dialog.component.scss'],
  animations: [
    trigger('expand', [
      state('OUT', style({ width: '95.8px ' })),
      state('IN', style({ width: '73.6px' })),
      transition('IN <=> OUT', [animate('230ms')]),
    ]),
  ],
})
export class FeatureItemCreationDialogComponent implements OnInit, OnDestroy {
  isEditMode: boolean = false;
  isUploading: boolean = false;
  uploaded: boolean = false;
  useMobileView: boolean = false;

  step: number = 1;
  selectedImage: number = 0;

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    categories: new FormControl(''),
  });

  allCategories: string[] = [];
  categories: string[] = [];
  images: any[] = [];

  actualDate = new Date();

  private unsubscribe: ReplaySubject<void> = new ReplaySubject<void>();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.useMobileView = event.target.innerWidth <= 1024;
  }

  get filteredCategories() {
    const searchValue = this.form.get('categories').value.toLowerCase();

    return this.allCategories.filter(
      (category) =>
        category.toLowerCase().startsWith(searchValue) &&
        !this.categories.includes(category)
    );
  }

  constructor(
    public dialogRef: MatDialogRef<FeatureItemCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.useMobileView = window.innerWidth <= 1024;

    this.productService
      .getProducts()
      .pipe(
        map((products) =>
          [].concat.apply(
            [],
            products.map((product) =>
              product.categories.map((category) => category.trim())
            )
          )
        ),
        tap(
          (categories: string[]) =>
            (this.allCategories = [...new Set(categories)])
        ),
        takeUntil(this.unsubscribe)
      )
      .subscribe();

    // #NOTE - Possible memory leak !
    setTimeout(() => {
      this.form.setErrors({
        invalid: true,
      });
    }, 0);

    if (this.data?._id) {
      this.isEditMode = true;

      this.form.setValue({
        title: this.data.title,
        description: this.data.description,
        categories: '',
      });

      this.categories = this.data.categories;
    }

    this.form.valueChanges.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.setFormValidity();
    });
  }

  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event) {
    event.preventDefault();
    const source =
      event.type === 'change' ? event.target.files : event.dataTransfer.files;
    const files = [...source].slice(0, 4);

    if (files.length > 0) {
      if (files.length > 1) {
        this.images = [];
      }

      [...files].forEach((file: File) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = (event) => {
          const image = { url: event.target.result, data: file };

          if (this.isFileValid(image.data)) {
            this.images.push(image);
            reader = null;
            this.setFormValidity();
          }
        };
      });
    }
  }

  isFileValid(file: File): boolean {
    const validImageFormats = ['jpeg', 'png'];

    return validImageFormats.some((format) => file.type === `image/${format}`);
  }

  uploadProduct(): void {
    if (!this.isUploading) {
      this.isUploading = true;
      const mainImage = this.images[+this.selectedImage];
      this.images.splice(this.selectedImage, 1);
      this.images.unshift(mainImage);
      this.selectedImage = 0;

      const newProduct = new FormData();
      newProduct.append('title', this.form.value.title);
      newProduct.append('description', this.form.value.description);
      newProduct.append('userId', this.authService.getUser()._id);

      this.categories.forEach((category) =>
        newProduct.append('categories', category.trim())
      );
      this.images.forEach((image) =>
        newProduct.append('images', image.data, image.data.filename)
      );

      of(null)
        .pipe(
          switchMap(() => {
            return this.productService.postProducts(newProduct);
          }),
          takeUntil(this.unsubscribe)
        )
        .subscribe((item) => {
          if (item) {
            this.uploaded = true;

            setTimeout(() => {
              this.dialogRef.close(true);
            }, 2000);
          }
        });
    }
  }

  updateProduct() {
    this.isUploading = true;
    const product = {
      ...this.data,
      title:
        this.form.value.title !== this.data.title
          ? this.form.value.title
          : this.data.title,
      description:
        this.form.value.description !== this.data.description
          ? this.form.value.description
          : this.data.description,
      categories: !this.isCategoriesSame()
        ? this.categories
        : this.data.categories,
      images: this.data.images.map((image) =>
        image.replace(this.productService.AWS_URL, '')
      ),
    };

    this.productService
      .patchProduct(product._id, product)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((product) => {
        if (product) {
          this.uploaded = true;
          product.images = product.images.map(
            (image) => `${this.productService.AWS_URL}${image}`
          );

          setTimeout(() => {
            this.dialogRef.close(product);
          }, 2000);
        }
      });
  }

  isCategoriesSame() {
    return this.data.categories.every((category) =>
      this.categories.includes(category)
    );
  }

  addCategory(searchValue?: string) {
    const category = searchValue || this.form.value.categories;

    if (category.length > 0 && !this.categories.includes(category)) {
      this.categories.push(category);
    }

    this.form.controls.categories.setValue('', { emitEvent: true });
  }

  removeCategory(index: number) {
    this.categories.splice(index, 1);
    this.setFormValidity();
  }

  setFormValidity() {
    const isFormValid =
      this.form.value.title.length > 0 &&
      this.form.value.description.length > 0;
    const categoriesAreValid = this.categories.length > 0;
    const imagesAreValid =
      this.images.length > 0 ||
      this.isEditMode ||
      (this.useMobileView && this.step === 1);

    this.form.setErrors({
      invalid: !isFormValid || !categoriesAreValid || !imagesAreValid,
    });
  }

  removeImage(index: number) {
    this.images.splice(index, 1);
    this.setFormValidity();
  }

  nextStep() {
    if (!this.useMobileView) {
      this.step = 3;
    } else {
      this.step += 1;
      this.setFormValidity();
    }
  }

  previousStep() {
    if (!this.useMobileView) {
      this.step = 1;
    } else {
      this.step -= 1;
    }
  }

  setMainImage(index: number) {
    this.selectedImage = index;
  }

  exitDialog(): void {
    this.dialogRef.close(false);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
