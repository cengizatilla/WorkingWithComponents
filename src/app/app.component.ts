import {Component} from '@angular/core';
import {product} from "../database/product";
import {Cart} from "../database/cart";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  customerCart: Cart[] = [];
  totalCost: number = 0;

  addNewProduct(cartItem: Cart) {
    if (cartItem.amount != 0) {
      this.customerCart.push(cartItem);

      this.totalCost += cartItem.rowTotalPrice;

    }
  }

  getCustomerTotal() {

    return this.totalCost;
  }

}
