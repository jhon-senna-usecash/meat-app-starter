import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Observable } from "rxjs/Observable";
import { MenuItem } from "../menu-item/menu-item.model";

@Component({
  selector: "mt-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit {
  id: string;
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.router.parent.snapshot.params["id"];
    this.menu = this.restaurantsService.getMenuOfRestaurant(this.id);
  }

  addMenuItem(item: MenuItem) {}
}
