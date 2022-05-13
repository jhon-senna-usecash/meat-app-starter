import { Restaurant } from "./../restaurants/restaurant/restaurant.model";
import { Component, OnInit } from "@angular/core";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "mt-detail-restaurant",
  templateUrl: "./detail-restaurant.component.html",
})
export class DetailRestaurantComponent implements OnInit {
  id: string;
  restaurant: Restaurant;

  constructor(
    private restaurantService: RestaurantsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.router.snapshot.params["id"];
    this.restaurantService
      .getRestaurantById(this.id)
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
