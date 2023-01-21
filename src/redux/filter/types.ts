export interface filterSliceState {
  searchValue: string,
  categoryId:number,
  sortId:number, 
  currentPage: number,
  sorts?:string[],
  search?:string
}