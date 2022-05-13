import { Restaurant } from "./restaurant/restaurant.model";
import { RestaurantsService } from "./restaurants.service";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mt-restaurants",
  templateUrl: "./restaurants.component.html",
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private restaurantsServices: RestaurantsService) {}

  ngOnInit() {
    this.restaurantsServices
      .getRestaurants()
      .subscribe((response) => (this.restaurants = response));
  }
}
