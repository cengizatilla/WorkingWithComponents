import {Component, Input, OnInit} from '@angular/core';
import {product} from "../../../database/product";
import {Cart} from "../../../database/cart";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() CartList:Cart[];

  constructor() { }

  ngOnInit(): void {
  }

}
