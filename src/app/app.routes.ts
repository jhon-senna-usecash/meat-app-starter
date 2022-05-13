import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DetailRestaurantComponent } from "./detail-restaurant/detail-restaurant.component";
import { MenuComponent } from "./detail-restaurant/menu/menu.component";
import { ReviewsComponent } from "./detail-restaurant/reviews/reviews.component";
import { HomeComponent } from "./home/home.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { OrderComponent } from "./order/order.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "restaurants", component: RestaurantsComponent },
  { path: "order", component: OrderComponent },
  { path: "order-summary", component: OrderSummaryComponent },
  {
    path: "restaurants/:id",
    component: DetailRestaurantComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      {
        path: "menu",
        component: MenuComponent,
      },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
];
