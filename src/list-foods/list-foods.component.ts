import { Component, Input } from '@angular/core';
import { Food } from '../models/foods.model';
import { DeliveryServiceService } from '../service/delivery-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { DisplayRestaurantComponent } from '../display-restaurant/display-restaurant.component';


@Component({
  selector: 'app-list-foods',
  imports: [RouterModule, CommonModule, DisplayRestaurantComponent],
  templateUrl: './list-foods.component.html',
  styleUrl: './list-foods.component.css'
})
export class ListFoodsComponent {
  @Input() food: Food | any;
    foods: Food[] = [];
    private service!: DeliveryServiceService;

    constructor(service: DeliveryServiceService) {
      this.service = service;
    }

    ngOnInit(){
      this.service.getFullMenu(
        (foods: Food[]) => this.foods = foods);
    }

    selectedRestaurant: Restaurant | null = null;

    goToRestaurant(restaurantId: number) {
      this.service.getRestaurant(restaurantId, (restaurant) => {
        this.selectedRestaurant = restaurant;
      });
    }

}
