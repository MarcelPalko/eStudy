import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/** Types */
import { Product, STATUSES } from '../types/product';
import { ProductService } from '../services/product.service';
import { HttpParams } from '@angular/common/http';
import {
  takeUntil,
  delay,
  mergeMap,
  map,
  skipWhile,
  catchError,
} from 'rxjs/operators';
import { combineLatest, of, ReplaySubject, interval, Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../types/user';
import { AuthService } from '../services/auth.service';
import { Chat } from '../types/chat';
import { ChatService } from '../services/chat.service';
import { FormControl } from '@angular/forms';
import { animate, trigger, transition, style } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { FeatureItemCreationDialogComponent } from '../feature-components/feature-item-creation-dialog/feature-item-creation-dialog.component';

@Component({
  selector: 'estudy-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
  animations: [
    trigger('fadeOutContainer', [
      transition(':leave', [
        style({ opacity: 1 }),
        animate('280ms 150ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class ProductDetailPageComponent implements OnInit, OnDestroy {
  id: string;
  product: Product;
  author: User;
  loggedUser: User = this.authService.getUser();
  messageField: FormControl = new FormControl('');

  selectedImage: number = 0;
  imagesLoaded: boolean = false;
  loaded: boolean = false;
  showScrollButton: boolean = false;
  statusChanged: boolean = false;
  useMobileView: boolean = false;

  chats: Chat[] = [];
  activeChat: number = 0;
  chatUsers: User[] = [];

  selectedStatus: number = -1;
  imagesLoadedCount: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.useMobileView = event.target.innerWidth <= 1279;
  }

  @ViewChild('chatContainer') chatContainer: ElementRef;
  private unsubscribe: ReplaySubject<void> = new ReplaySubject<void>();
  private messageStateBuffer: ReplaySubject<Chat> = new ReplaySubject<Chat>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private userService: UserService,
    private authService: AuthService,
    private chatService: ChatService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.useMobileView = window.innerWidth <= 1279;
    const idParam = new HttpParams().set('_id', this.id);
    this.productService
      .getProducts(idParam)
      .pipe(
        mergeMap((product) => {
          if (product) {
            this.product = product[0];
            this.selectedStatus = STATUSES.findIndex(
              (status) => status.type === this.product.status
            );

            return this.chatService
              .getChats(product[0]._id)
              .pipe(catchError((err) => of(null)));
          } else {
            return of(null);
          }
        }),
        mergeMap((chats) => {
          let userIdsParam = `_id=${this.product.userId}`;

          if (chats) {
            chats.forEach((chat) => {
              this.chats.push(chat);

              userIdsParam += `&_id=${
                chat.userIds.filter(
                  (user) => user._id !== this.product.userId
                )[0]
              }`;
            });
          }

          return this.userService.getUsers(userIdsParam);
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe((users) => {
        this.author = users.find((user) => user._id === this.product.userId);
        this.chatUsers = users.filter((user) => user._id !== this.author._id);

        if (
          this.chats.length > 0 &&
          this.getUnreadMessages(this.activeChat) > 0
        ) {
          this.messageStateBuffer.next(this.chats[this.activeChat]);
        }

        /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
        setTimeout(() => this.scrollToBottom());

        this.loaded = true;
      });

    interval(1000)
      .pipe(
        skipWhile(() => !this.loaded || this.chats.length === 0),
        mergeMap(() => {
          const listOfChats: Observable<any>[] = [];
          this.chats.map((chat) =>
            listOfChats.push(this.chatService.getChatState(chat._id))
          );

          return combineLatest(listOfChats);
        }),
        map((chats) => {
          return [].concat.apply(
            [],
            chats.map((chat) => chat)
          );
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe((chats) => {
        chats.forEach((chat, index) => {
          if (this.chats[index].changedDate !== chat.changedDate) {
            this.chats[index] = {
              ...this.chats[index],
              messages: chat.messages.map((message) => {
                return {
                  ...message,
                  //text: this.constructUrlFromMessage(message.text),
                };
              }),
              changedDate: chat.changedDate,
            };

            if (chat._id === this.chats[this.activeChat]._id) {
              this.messageStateBuffer.next(chat);
            }

            /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
            setTimeout(() => this.scrollToBottom());
          }
        });
      });

    this.messageStateBuffer
      .pipe(
        map((chat) => {
          chat.messages.map((message) => (message.status = 'READ'));

          return chat;
        }),
        mergeMap((chat) => this.chatService.patchChat(chat._id, chat)),
        takeUntil(this.unsubscribe)
      )
      .subscribe((updatedChat) => {
        this.chats.find((chat) => chat._id === updatedChat._id).messages =
          updatedChat.messages;
      });
  }

  showImage(index: number): void {
    this.selectedImage = index;
  }

  getUser(id: string) {
    if (id === this.loggedUser._id) {
      return this.loggedUser;
    }

    const userInActiveChat = id
      ? id
      : this.chats[this.activeChat].userIds.filter(
          (id) => id !== this.product.userId
        )[0];

    return this.chatUsers.find((user) => user._id === userInActiveChat);
  }

  getUnreadMessages(index: number) {
    return this.chats[index].messages.filter(
      (message) =>
        message.status === 'CREATED' && message.authorId !== this.author._id
    ).length;
  }

  getStatuses() {
    if (this.loggedUser && this.product.userId === this.loggedUser._id) {
      return STATUSES;
    } else {
      return STATUSES.filter((item, index) => index === this.selectedStatus);
    }
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(FeatureItemCreationDialogComponent, {
      height: '80vh',
      width: '70vw',
      data: this.product,
    });

    dialogRef.afterClosed().subscribe((product) => {
      if (product) {
        this.product = product;
      }
    });
  }

  selectChat(user: User) {
    this.activeChat =
      this.chats.findIndex((chat) => chat.userIds.includes(user._id)) || 0;

    if (this.getUnreadMessages(this.activeChat) > 0) {
      this.messageStateBuffer.next(this.chats[this.activeChat]);
    }

    /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
    setTimeout(() => this.scrollToBottom());
    this.showScrollButton = false;
  }

  showScrollToBottom(event) {
    if (event.scrollTop + 20 < this.chatContainer.nativeElement.offsetHeight) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToBottom() {
    try {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight * 999;
    } catch (err) {}

    this.showScrollButton = false;
  }

  setStatusToProduct(index: number) {
    if (this.product.userId === this.loggedUser._id) {
      this.selectedStatus = index;
      const product = {
        ...this.product,
        status: STATUSES[this.selectedStatus].type,
        images: this.product.images.map((image) =>
          image.replace(this.productService.AWS_URL, '')
        ),
      };

      this.productService
        .patchProduct(this.product._id, product)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe((updatedProduct) => {
          this.product = {
            ...updatedProduct,
            images: updatedProduct.images.map(
              (image) => `${this.productService.AWS_URL}${image}`
            ),
          };

          this.statusChanged = true;
          setTimeout(() => {
            this.statusChanged = false;
          }, 2000);
        });
    }
  }

  constructUrlFromMessage(message: string) {
    let match = message.match(
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
    );
    let formatedmessage = message;

    match?.map((url) => {
      formatedmessage = formatedmessage.replace(
        url,
        '<a href="' + url + '" target="_BLANK">' + url + '</a>'
      );
    });

    return formatedmessage;
  }

  destructFromMessage(message: string) {
    const match =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

    const destructed = message.match(match)?.[1] || message;

    return destructed;
  }

  sendMessage() {
    if (!this.loggedUser) {
      this.router.navigate(['/login']);

      return;
    }

    const sentForChat =
      this.chats.length > 0 ? this.chats[this.activeChat] : null;
    let message = {
      text: this.messageField.value,
      chatId: sentForChat?._id || '',
      productId: this.product._id,
    };

    const chatRoom =
      this.chats.length > 0
        ? of(null)
        : this.chatService.createChat({
            userIds: [this.loggedUser._id, this.author._id],
            productId: this.product._id,
            messages: [],
          });

    this.messageField.setValue('', { emitEvent: false });

    chatRoom
      .pipe(
        map((chat) => chat || sentForChat),
        mergeMap((chat: Chat) => {
          message.chatId = chat._id;

          return this.chatService.sendMessage(message);
        }),
        takeUntil(this.unsubscribe)
      )
      .subscribe((chat: Chat) => {
        this.chats[this.activeChat] = chat;

        /** This is not a good practise cuz we break angular-lifecycle => #Refactor */
        setTimeout(() => this.scrollToBottom());
      });
  }

  onImageLoad(evt) {
    if (evt && evt.target) {
      this.product.loaded = true;
      this.imagesLoadedCount++;

      if (this.product.images.length === this.imagesLoadedCount) {
        this.loaded = true;
      }
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
