import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {product} from "../../../database/product";
import {productList} from "../../../database/productList";
import {Cart} from "../../../database/cart";


@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  productList: product[] = productList;
  @Output() addNewCart = new EventEmitter<Cart>();

  @ViewChild('productSelect') productSelect: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor() {

  }

  ngOnInit(): void {
  }

  addNewCartItem() {
    console.log(this.productSelect.nativeElement.value);
    console.log(this.amountInput.nativeElement.value);
    if (this.productSelect.nativeElement.value > 0 && this.amountInput.nativeElement.value > 0) {

      let theProduct = this.productList.find(item => item.productId == this.productSelect.nativeElement.value);
      this.addNewCart.emit(new Cart(theProduct, this.amountInput.nativeElement.value, theProduct.productPrice * this.amountInput.nativeElement.value));

      this.amountInput.nativeElement.value = '';
      this.productSelect.nativeElement.value = 'Choose';

    } else {
      alert("Please fill form !");
    }
  }

}
