import { Component, Input } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-restaurant',
  imports: [RouterModule, CommonModule],
  templateUrl: './display-restaurant.component.html',
  styleUrl: './display-restaurant.component.css'
})
export class DisplayRestaurantComponent {
    @Input() restaurant: Restaurant | any;
}
