export interface Opinion {
  id?: number;
  hotelID: number;
  author: string;
  rate: number;
  opinion: string;
  createdOn?: string;
}
