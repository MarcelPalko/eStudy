export interface Product {
  _id: string;
  userId: string;
  title: string;
  description: string;
  categories: string[];
  images: string[];
  status?: string;

  timestamp?: string;
  createdAt?: string;
  updatedAT?: string;

  isFavourite?: boolean;
  loaded?: boolean;
}

export const STATUSES: {
  type: string;
  icon: string;
  class: string;
  tooltip: string;
}[] = [
  {
    type: 'ACTIVE',
    icon: 'fas fa-solid fa-users',
    class: 'status--communication',
    tooltip: 'O tento produk má zájem více lidí',
  },
  {
    type: 'SOLD',
    icon: 'fas fa-solid fa-handshake',
    class: 'status--sold',
    tooltip: 'Produkt je již zarezervován',
  },
];
