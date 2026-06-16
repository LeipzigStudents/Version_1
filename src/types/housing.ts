export interface Housing {
  id: string;
  title: string;
  rent: number;
  district: string;
  description: string;
  imageUrls?: string[];
  ownerId: string;
}
