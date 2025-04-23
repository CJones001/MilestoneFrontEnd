import { Component, Input } from '@angular/core';
import { DeliveryServiceService } from '../service/delivery-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-restaurant',
  imports: [],
  templateUrl: './delete-restaurant.component.html',
  styleUrl: './delete-restaurant.component.css'
})
export class DeleteRestaurantComponent {
  @Input() restaurantId!: number;
  service: DeliveryServiceService | undefined;
  router: any;

  constructor(service: DeliveryServiceService, router: Router, http: HttpClient) {
    this.service = service;
    this.router = router;
  }

  onSubmit() {
    this.service?.deleteRestaurant(this.restaurantId, () => {
      console.log("Restaurant deleted successfully");
    });

    this.router.navigate(['/list-restaurants']);
  }
}
