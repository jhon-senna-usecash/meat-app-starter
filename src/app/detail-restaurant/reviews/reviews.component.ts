import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Restaurant } from "./../../restaurants/restaurant/restaurant.model";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "mt-reviews",
  templateUrl: "./reviews.component.html",
})
export class ReviewsComponent implements OnInit {
  id: string;
  reviews: Observable<any>;

  constructor(
    private restaurantsService: RestaurantsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.router.parent.snapshot.params["id"];
    this.reviews = this.restaurantsService.getReviewsOfRestaurant(this.id);
  }
}
