import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeliveryServiceService } from '../service/delivery-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-restaurant',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-restaurant.component.html',
  styleUrl: './create-restaurant.component.css'
})
export class CreateRestaurantComponent {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: DeliveryServiceService,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      avgWaitTime: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.createForm.valid) {
      this.service.createRestaurant(this.createForm.value, () => {
        console.log('Restaurant created successfully');
        this.router.navigate(['/list-restaurants']);
      });
    }
  }
}
