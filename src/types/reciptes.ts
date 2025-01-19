export interface ApiReciptes {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  items: ReciptesItems[];
}

export interface ReciptesItems {
  recipeId: number;
  imageUrl: string;
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  makingAmount: string;
}
