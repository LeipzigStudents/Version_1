export interface MarketplaceItem {
  id: string;
  title: string;
  price: number;
  category: string;
  description: string;
  imageUrls?: string[];
  sellerId: string;
}
