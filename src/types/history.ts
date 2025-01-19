export interface ApiHistory {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: HistoryItems[];
}

export interface HistoryItems {
  mileStoneId: number;
  year: number;
  description: string;
}
