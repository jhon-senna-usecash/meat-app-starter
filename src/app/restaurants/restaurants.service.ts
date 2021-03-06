import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { ErrorHandler } from "app.error-handler";
import { MenuItem } from "app/detail-restaurant/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  getReviewsOfRestaurant(id: string): Observable<any> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }

  getMenuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/menu`)
      .map((response) => response.json())
      .catch(ErrorHandler.handleError);
  }
}
