export type Pizza = {
  id:string;
  title:string;
  price:number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
}

export enum Status {
  LOADING='loading',
  SUCESS='sucess',
  ERROR='error'
}

export type SearchPizzaParams = {
  sortId: number;
  sorts:string[]
  search: string;
  currentPage:string;
  searchCategory:string
}

export interface PizzaSliceState {
  pizzas: Pizza[] ;
  status: Status;
}