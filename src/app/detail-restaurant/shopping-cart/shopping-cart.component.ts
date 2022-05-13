import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";
import { ShoppingCartService } from "./shopping-cart.service";

@Component({
  selector: "mt-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
})
export class ShoppingCartComponent implements OnInit {
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {}

  items(): any[] {
    return this.cartService.items;
  }

  total(): number {
    return this.cartService.total();
  }

  clear() {
    this.cartService.clear();
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  addItem(item: MenuItem) {
    this.cartService.addItem(item);
  }
}
