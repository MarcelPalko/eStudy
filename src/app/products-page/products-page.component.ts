import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  trigger,
  style,
  transition,
  animate,
  state,
} from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

/** RXJS */
import { combineLatest, interval, of, ReplaySubject, Subject } from 'rxjs';
import {
  takeUntil,
  delay,
  tap,
  switchMap,
  mergeMap,
  map,
  debounceTime,
} from 'rxjs/operators';

/** Types */
import { Product, STATUSES } from '../shared/types/product';
import { User } from '../shared/types/user';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { ProductService } from '../shared/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { FeatureItemCreationDialogComponent } from '../feature-components/feature-item-creation-dialog/feature-item-creation-dialog.component';

const ITEMS_COUNT_IN_ROW_BY_RESOLUTION = {
  3040: 13,
  2880: 10,
  2560: 8,
  2400: 8,
  2133: 7,
  1920: 6,
  1745: 6,
  1536: 5,
  1280: 4,
  1097: 3,
  768: 2,
  599: 3,
  450: 4,
};

@Component({
  selector: 'estudy-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ display: 'none', opacity: 0 }),
        animate(
          '300ms 150ms ease-out',
          style({ display: 'block', opacity: 1 })
        ),
      ]),
    ]),
    trigger('fadeOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('320ms 150ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('280ms 150ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
    trigger('fadeOutContainer', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('280ms 150ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ProductsPageComponent implements OnInit, OnDestroy {
  @ViewChild('productsContainer') productsContainer: ElementRef;
  @ViewChild('viewContainer') viewContainer: ElementRef;
  @ViewChild('categorySearchElement', { static: false })
  categorySearchElement: ElementRef;

  onWindowScroll(event) {
    const actualPosition = event.scrollTop;
    const max = event.offsetHeight;
    const isFullyScrolled =
      event.scrollHeight - actualPosition === event.clientHeight;

    if (actualPosition === 0) {
      this.showMenu = true;
      this.showScrollButton = false;

      return;
    }

    if (isFullyScrolled) {
      this.showMenu = true;
      this.showScrollButton = true;

      return;
    }

    this.showMenu =
      this.previousPosition > actualPosition - 2 && !this.loadMore;

    if (
      this.previousPosition <= actualPosition &&
      actualPosition > max - 800 &&
      !this.loadMore
    ) {
      this.loadMore = true;
      this.showScrollButton = true;
      this.showMoreProducts();
    }

    this.previousPosition = actualPosition;
  }

  private productIsClicked: boolean = true;
  private loadMore: boolean = false;
  loaded: boolean = false;
  aplicationNeedReload: boolean = false;
  showScrollButton: boolean = false;
  showMenu: boolean = true;
  showIntroContainer: boolean = sessionStorage.getItem('alreadyVisited')
    ? false
    : true;
  useMobileView: boolean = false;

  form: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  categorySearch = new FormControl('');

  activeFilters: { search: string; category: string } = {
    search: '',
    category: '',
  };
  activeCategoriesCount: number = 5;

  sortBy: string = 'HIGH';
  lastChange: string = '';

  products: Product[] = [];
  favouriteProducts: Product[] = [];

  categories: string[] = [];
  loggedUser: User | null;

  countOfShowedProducts: number = 0;
  private previousPosition: number = 0;
  private INTRO_DELAY_TIMER: number = 0;

  public randomProductName = '';
  public productLineLength = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.useMobileView = event.target.innerWidth <= 1024;
    this.productLineLength = this.useMobileView ? 10 : 30;
  }

  get allProducts() {
    this.activeFilters.search = this.form.get('search').value.toLowerCase();
    let products = this.sortProductsByDate();

    if (
      Object.values(this.activeFilters).every(
        (value: string) => value.length <= 0
      )
    ) {
      return products;
    }

    if (this.activeFilters.category.length > 0) {
      const activeCategories = this.activeFilters.category.split('|');

      products = this.products.filter((product) =>
        activeCategories.some((category) =>
          product.categories
            .map((pCat) => pCat.toLocaleLowerCase().trim())
            .includes(category.toLocaleLowerCase().trim())
        )
      );
    }

    if (this.activeFilters.search.length > 0) {
      products = products.filter((product) =>
        product.title.toLowerCase().includes(this.activeFilters.search)
      );
    }

    return products;
  }

  get filteredCategories() {
    const searchValue = this.categorySearch.value.toLocaleLowerCase();

    if (searchValue.length > 0) {
      return this.categories.filter(
        (category, index) =>
          category.toLocaleLowerCase().startsWith(searchValue) &&
          index >= this.activeCategoriesCount
      );
    }

    return this.categories.slice(this.activeCategoriesCount);
  }

  sortProductsByDate(): Product[] {
    const sortedItems = this.products.sort((a, b) =>
      a.createdAt.localeCompare(b.createdAt)
    );

    if (this.sortBy === 'LOW') {
      return sortedItems;
    }

    return sortedItems.reverse();
  }

  private unsubscribe: ReplaySubject<void> = new ReplaySubject<void>();
  private refresh: ReplaySubject<void> = new ReplaySubject<void>();
  private _updateProductBuffer: Subject<Product> = new Subject<Product>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService,
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loggedUser = this.authService.getUser();
    const idParam = `_id=${this.loggedUser?._id}`;

    if (!sessionStorage.getItem('alreadyVisited')) {
      sessionStorage.setItem('alreadyVisited', 'TRUE');
      this.INTRO_DELAY_TIMER = 4000;
    }

    this.refresh.next();
    this.refresh
      .pipe(
        delay(this.INTRO_DELAY_TIMER),
        tap(() => (this.showIntroContainer = false)),
        mergeMap(() =>
          combineLatest([
            this.productService.getLastChange(),
            this.productService.getProducts(),

            // Call user to internally save User to localStorage
            this.loggedUser ? this.userService.getUsers(idParam) : of(null),
          ])
        ),
        map(([dbInformation, products]) => {
          this.lastChange = dbInformation.productsLastChange;

          return products || [];
        }),
        tap((products) => (this.products = products)),
        tap(() => {
          this.useMobileView = window.innerWidth <= 1024;
          this.productLineLength = this.useMobileView ? 10 : 25;
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe((products) => {
        if (products.length > 0) {
          const _randomIndexInRange = Math.floor(
            Math.random() * products.length
          );
          this.randomProductName = products[_randomIndexInRange]['title'];

          if (this.loggedUser) {
            this.favouriteProducts = [...this.loggedUser.favouriteProducts];

            this.favouriteProducts.forEach((product) => {
              const favouriteProductIndex = this.products.findIndex(
                (item) => item._id === product._id
              );

              if (favouriteProductIndex >= 0) {
                this.products[favouriteProductIndex]['isFavourite'] = true;
              }
            });
          }

          this.countOfShowedProducts =
            products.length > this.itemsCountOnLoad()
              ? this.itemsCountOnLoad()
              : products.length;

          this._setCategoriesByFreq();
        }

        this.loaded = true;
      });

    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((change) => {
        if (change) {
          this.countOfShowedProducts = this.allProducts.length;

          if (this.showMenu) {
            this.scrollTop();
          }
        }
      });

    interval(90000)
      .pipe(
        mergeMap(() => this.productService.getLastChange()),
        map(
          (item: { _id: string; productsLastChange: string }) =>
            item.productsLastChange || ''
        ),
        takeUntil(this.unsubscribe)
      )
      .subscribe((productsLastChange) => {
        if (this.lastChange !== productsLastChange) {
          this.lastChange = productsLastChange;
          this.aplicationNeedReload = true;
        }
      });

    this._updateProductBuffer
      .pipe(
        debounceTime(250),
        switchMap(() => {
          return this.userService.patchUser(this.loggedUser._id, {
            favouriteProducts: [...this.favouriteProducts],
          });
        }),
        tap((user) => (this.loggedUser = user)),
        takeUntil(this.unsubscribe)
      )
      .subscribe();
  }

  getStatus(productStatus: string) {
    return STATUSES.find((s) => s.type === productStatus);
  }

  getRowItemsCount() {
    const windowWidth = +window.innerWidth;
    const closestRes = Object.keys(ITEMS_COUNT_IN_ROW_BY_RESOLUTION).reduce(
      (prev, current) => {
        return Math.abs(+current - windowWidth) < Math.abs(+prev - +windowWidth)
          ? current
          : prev;
      }
    );

    return ITEMS_COUNT_IN_ROW_BY_RESOLUTION[closestRes];
  }

  addToActiveCategories(category: string) {
    const categoryPosition = this.categories.findIndex(
      (cat) => cat === category
    );

    this.categories.splice(categoryPosition, 1);
    this.categories.splice(this.activeCategoriesCount, 0, category);

    this.activeCategoriesCount++;
    this.toggleActiveCategory(category);
  }

  toggleActiveCategory(category: string): void {
    category = category.trim();

    if (!this.activeFilters.category.includes(category)) {
      this.activeFilters.category += `${category}|`;
    } else {
      const categoryPosition = this.categories.findIndex(
        (cat) => cat === category
      );
      this.activeFilters.category = this.activeFilters.category.replace(
        `${category}|`,
        ''
      );

      this.categories.splice(categoryPosition, 1);
      this.categories.splice(this.categories.length, 0, category);
      this.activeCategoriesCount -= this.activeCategoriesCount === 5 ? 0 : 1;
    }

    this.countOfShowedProducts = this.allProducts.length;
  }

  clearActiveCategories() {
    this.activeFilters.category = '';
    this.activeCategoriesCount = 5;
    this.showMoreProducts(true);
  }

  focusOnSearchField() {
    this.categorySearchElement.nativeElement.focus();
  }

  clearCategorySearchField() {
    this.categorySearch.setValue('');
  }

  toggleSort(): void {
    this.sortBy = this.sortBy === 'LOW' ? 'HIGH' : 'LOW';
  }

  private _setCategoriesByFreq() {
    let categoriesWithFreq = [];
    const arrayCategories: string[] = [].concat.apply(
      [],
      this.products.map((product) =>
        product.categories.map((category) => category.trim())
      )
    );

    [...new Set(arrayCategories)].forEach((cat) => {
      categoriesWithFreq.push({
        key: cat,
        count: arrayCategories.filter((item) => item === cat).length,
      });
    });
    categoriesWithFreq.sort((a, b) => b.count - a.count);

    this.categories = [
      ...categoriesWithFreq.map((i) =>
        arrayCategories.find((j) => j === i.key)
      ),
    ];
  }

  toggleFavourite(product: Product): void {
    if (this.loggedUser && product.userId !== this.loggedUser?._id) {
      this.productIsClicked = false;
      product.isFavourite = !product.isFavourite;

      if (
        this.favouriteProducts.map((item) => item._id).includes(product._id)
      ) {
        this.favouriteProducts = this.favouriteProducts.filter(
          (item) => item._id !== product._id
        );
      } else {
        this.favouriteProducts.push(product);
      }

      this._updateProductBuffer.next(product);
    }
  }

  /**
   * @param range Takes range for counter
   * @returns Array of numbers for HTML cycle for loop
   */
  cycleFor(range: number): number[] {
    return range > 0 ? Array(range).map((x, i) => i) : [];
  }

  itemsCountOnLoad() {
    const countLine = this.getRowItemsCount();
    const countLoad =
      Math.ceil(this.productsContainer.nativeElement.offsetHeight / 370) *
      countLine;

    return countLoad;
  }

  claculateRestOfCards(spacer?: boolean): number {
    const itemsCountToLine = this.getRowItemsCount();
    const rowsCount = Math.ceil(this.countOfShowedProducts / itemsCountToLine);
    const loadCount = rowsCount * itemsCountToLine - this.countOfShowedProducts;

    if (
      spacer &&
      this.countOfShowedProducts !== this.products.length &&
      this.countOfShowedProducts !== 0
    ) {
      return itemsCountToLine * rowsCount - this.countOfShowedProducts;
    }

    return loadCount === 0 && this.loadMore ? itemsCountToLine : loadCount;
  }

  private clickedOnCard(targetElement: any): boolean {
    return (
      targetElement.tagName !== 'I' &&
      targetElement.className !== 'card__favourite'
    );
  }

  openProductDetail(id: string, event: any) {
    if (this.clickedOnCard(event.target)) {
      this.productIsClicked = true;
      setTimeout(() => {
        if (this.productIsClicked) {
          this.router.navigate([id], { relativeTo: this.activatedRoute });
        }
      }, 250);
    }
  }

  loggedOut(event: boolean) {
    if (event) {
      this.loaded = false;
      this.loggedUser = null;
      this.favouriteProducts = [];
      window.location.reload();
    }
  }

  createdProduct(event: boolean) {
    if (event) {
      this.aplicationNeedReload = false;
      this.reloadPage();
    }
  }

  showMoreProducts(startLoad?: boolean) {
    setTimeout(() => {
      this.countOfShowedProducts += startLoad
        ? this.itemsCountOnLoad()
        : this.claculateRestOfCards();
      this.loadMore = false;

      if (this.countOfShowedProducts >= this.products.length) {
        this.countOfShowedProducts = this.products.length;
      }
    }, 1000);
  }

  reloadPage() {
    this.scrollTop();
    this.loaded = false;
    this.refresh.next();
    this.aplicationNeedReload = false;
  }

  scrollTop() {
    this.viewContainer.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    this.showScrollButton = false;
  }

  openCreationDialog() {
    if (this.loggedUser) {
      const dialogRef = this.dialog.open(FeatureItemCreationDialogComponent, {
        height: '80vh',
        width: '70vw',
      });

      dialogRef.afterClosed().subscribe((event) => {
        this.refresh.next(event);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  onImageLoad(evt, index) {
    if (evt && evt.target) {
      this.products[index]['loaded'] = true;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
