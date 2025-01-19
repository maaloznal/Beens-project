export interface ApiResponse {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

export interface FactItem {
  factId: number;
  title: string;
  description: string;
}
