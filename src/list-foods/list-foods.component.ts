import { Component, Input } from '@angular/core';
import { Food } from '../models/foods.model';
import { DeliveryServiceService } from '../service/delivery-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-foods',
  imports: [RouterModule, CommonModule],
  templateUrl: './list-foods.component.html',
  styleUrl: './list-foods.component.css'
})
export class ListFoodsComponent {
  @Input() food: Food | any;
    foods: Food[] = [];
    private service!: DeliveryServiceService;
    restaurantNames: { [id: number]: string } = {};


    constructor(service: DeliveryServiceService) {
      this.service = service;
    }

    ngOnInit() {
      this.service.getFullMenu((foods: Food[]) => {
        this.foods = foods;
        console.log("Fetched foods:", this.foods);

        for (const food of this.foods) {
          this.service.getRestaurant(food.restaurantId, (restaurant: Restaurant) => {
            console.log("Fetched restaurant:", restaurant);
            this.restaurantNames[food.restaurantId] = restaurant.name;
          });
        }
      });
    }

  }


