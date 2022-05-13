import { BrowserModule } from "@angular/platform-browser";
import { LOCALE_ID, NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ROUTES } from "./app.routes";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantsService } from "./restaurants/restaurants.service";
import { DetailRestaurantComponent } from "./detail-restaurant/detail-restaurant.component";
import { MenuComponent } from "./detail-restaurant/menu/menu.component";
import { ShoppingCartComponent } from "./detail-restaurant/shopping-cart/shopping-cart.component";
import { MenuItemComponent } from "./detail-restaurant/menu-item/menu-item.component";
import { ReviewsComponent } from "./detail-restaurant/reviews/reviews.component";
import { ShoppingCartService } from "./detail-restaurant/shopping-cart/shopping-cart.service";
import { OrderComponent } from "./order/order.component";
import { FormsModule } from "@angular/forms";
import { InputComponent } from "./shared/input/input.component";
import { RadioComponent } from "./shared/radio/radio.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderService } from "./order/order.service";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { RatingComponent } from "./shared/rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    DetailRestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    OrderService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
