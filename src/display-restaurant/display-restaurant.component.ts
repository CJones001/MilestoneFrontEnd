import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EditRestaurantComponent } from '../edit-restaurant/edit-restaurant.component';

@Component({
  selector: 'app-display-restaurant',
  imports: [RouterModule, CommonModule, EditRestaurantComponent],
  templateUrl: './display-restaurant.component.html',
  styleUrl: './display-restaurant.component.css'
})
export class DisplayRestaurantComponent {
    @Input() restaurant: Restaurant | any;
    selectedRestaurant: any;

    displayRestaurant() {
        this.selectedRestaurant = this.restaurant;
    }
}
