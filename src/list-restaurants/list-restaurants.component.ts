import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { DeliveryServiceService } from '../service/delivery-service.service';
import { RouterModule } from '@angular/router';
import { DisplayRestaurantComponent } from '../display-restaurant/display-restaurant.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-restaurants',
  imports: [RouterModule, CommonModule, DisplayRestaurantComponent],
  templateUrl: './list-restaurants.component.html',
  styleUrl: './list-restaurants.component.css'
})
export class ListRestaurantsComponent {
    @Input() restaurant: Restaurant | any;
    restaurants: Restaurant[] | undefined;
    private service!: DeliveryServiceService;

    constructor(service: DeliveryServiceService) {
      this.service = service;
    }

    ngOnInit(){
      this.service.getRestaurants(
        (restaurants: Restaurant[]) => this.restaurants = restaurants);
    }

    selectedRestaurant: Restaurant | null = null;

    public onSelectRestaurant(restaurant: Restaurant){
      this.selectedRestaurant = restaurant;
    }
}

