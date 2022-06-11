export interface Product {
  _id: string,
  name: string,
  description: string,
  category: string[],
  soldPrice: number,
  regularPrice: number,
  imgUrl: string[],
  createdAt : Date,
  updatedAt?: Date,
}
