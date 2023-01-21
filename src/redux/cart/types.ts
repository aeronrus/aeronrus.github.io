export type CartItemType = {
  id: string,
  PizzaName: string, 
  price: number,
  imageUrl :string,
  type :string,
  size :string,
  count:number
};

export interface CartSliceState {
  totalPrice:number;
  items:CartItemType[]
}