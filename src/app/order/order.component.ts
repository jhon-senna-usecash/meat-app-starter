import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CartItem } from "app/detail-restaurant/shopping-cart/cart-item.model";
import { RadioOption } from "app/shared/radio/radio.model";
import { Order, OrderItem } from "./order.model";
import { OrderService } from "./order.service";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html",
})
export class OrderComponent implements OnInit {
  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" },
  ];

  constructor(private orderService: OrderService, private route: Router) {}

  ngOnInit() {}

  getCartItems() {
    return this.orderService.getCartItems();
  }

  increaseQty(item: CartItem) {
    this.orderService.increase(item);
  }

  decreaseQty(item: CartItem) {
    this.orderService.decrease(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  checkOrder(order: Order) {
    order.orderItems = this.getCartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );

    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      console.log(orderId);
      this.orderService.clear();
      this.route.navigate(["/order-summary"]);
    });
  }
}
