import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Restaurant } from '../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryServiceService } from '../service/delivery-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-restaurant',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent {
  @Input() restaurant: Restaurant | undefined;
  editForm!: FormGroup;
  restaurantId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private service: DeliveryServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getRestaurant(this.restaurantId, (restaurant: Restaurant) => {
      this.restaurant = restaurant;
      this.editForm = this.formBuilder.group({
        name: [restaurant.name, Validators.required],
        location: [restaurant.location, Validators.required],
        category: [restaurant.category, Validators.required],
        avgWaitTime: [restaurant.avgWaitTime, [Validators.required, Validators.min(0)]]
      });
    });
  }

  displayRestaurant() {
    this.router.navigate(['/list-restaurants']);
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      const updatedRestaurant: Restaurant = {
        ...this.editForm.value,
        id: this.restaurantId
      };

      this.service.updateRestaurant(updatedRestaurant, () => {
        alert('Restaurant updated successfully!');
        this.router.navigate(['/list-restaurants']);
      });
    }
  }
}
