export interface ApiReciptes {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: ReciptesItems[];
}

export interface ReciptesItems {
  imageUrl: string;
  name: string;
  description: string;
}
