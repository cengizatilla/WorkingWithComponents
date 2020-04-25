import {product} from "./product";

export class Cart {

  productItem: product;
  amount: number;
  rowTotalPrice: number

  constructor(productItem:product, amount:number, rowTotalPrice:number) {

    this.productItem = productItem;
    this.amount = amount;
    this.rowTotalPrice = rowTotalPrice;

  }


}
