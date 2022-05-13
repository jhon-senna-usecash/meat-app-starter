import { MEAT_API } from "./../app.api";
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { CartItem } from "app/detail-restaurant/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/detail-restaurant/shopping-cart/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Order } from "./order.model";

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: Http) {}

  getCartItems(): CartItem[] {
    return this.cartService.items;
  }

  increase(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  decrease(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map((response) => response.json())
      .map((order) => order.id);
  }
}
