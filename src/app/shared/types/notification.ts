export interface Notification {
  _id: string;
  type: string;
  text: string;
  product: string;
  createdAt: string;
}

export const ICON_BY_TYPES = {
  delete: 'fas fa-info-circle',
  message: 'fas fa-comment-dots',
};
