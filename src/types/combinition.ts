export interface ApiCombinitions {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: CombinationsItems[];
}

export interface CombinationsItems {
  combinationId: number;
  name: string;
  tag: string[];
}
