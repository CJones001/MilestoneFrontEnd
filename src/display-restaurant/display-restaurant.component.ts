import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditRestaurantComponent } from '../edit-restaurant/edit-restaurant.component';
import { HttpClient } from '@angular/common/http';
import { DeliveryServiceService } from '../service/delivery-service.service';
import { DeleteRestaurantComponent } from '../delete-restaurant/delete-restaurant.component';

@Component({
  selector: 'app-display-restaurant',
  imports: [RouterModule, CommonModule, DeleteRestaurantComponent],
  templateUrl: './display-restaurant.component.html',
  styleUrl: './display-restaurant.component.css'
})
export class DisplayRestaurantComponent {
  @Input() restaurant: Restaurant | any;

  constructor(private router: Router, private http: HttpClient) {

  }

  editRestaurant(number: number) {
    console.log("Edit restaurant with ID:", number);
    this.router.navigate(['/edit-restaurant', number]);
  }
}
