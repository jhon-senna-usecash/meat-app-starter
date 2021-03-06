import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map((item) => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(
      (menuItem) => menuItem.menuItem.id === item.id
    );

    if (foundItem) {
      this.increaseQuantity(foundItem);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  increaseQuantity(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQuantity(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
