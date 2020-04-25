export class product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;

  constructor(productId: number, productName: string, productDescription: string, productPrice: number) {
    this.productId = productId
    this.productName = productName;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
  }
}
