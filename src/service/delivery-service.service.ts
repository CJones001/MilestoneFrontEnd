import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Food } from '../models/foods.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryServiceService {

  private host = "http://localhost:5000";

  restaurants: Restaurant[] | undefined;

  constructor(private http: HttpClient) { }

  public getRestaurants(callback: (restaurants: Restaurant[]) => void): void {
    this.http.get<Restaurant[]>(this.host + "/restaurants").
    subscribe((restaurants: Restaurant[]) => {
      callback(restaurants);
    });
  }

  public getRestaurant(id: number, callback: (restaurant: Restaurant) => void): void {
    this.http.get<Restaurant>(this.host + "/restaurants/" + id).
    subscribe((restaurant: Restaurant) => {
      callback(restaurant);
    });
  }

  public getRestaurantMenu(id: number, callback: (foods: Food[]) => void): void {
    this.http.get<Food[]>(this.host + "/restaurants/" + id + "menu").
    subscribe((foods: Food[]) => {
      callback(foods);
    });
  }

  public createRestaurant(restaurant: Restaurant, callback: () => void): void {
    this.http.post<Restaurant>(this.host + "/restaurants", restaurant).
    subscribe((data) => {
      callback();
    });
  }

  public updateRestaurant(restaurant: Restaurant, callback: () => void): void {
    this.http.put<Restaurant>(this.host + "/restaurants/" + restaurant.id, restaurant).
    subscribe((data) => {
      callback();
    });
  }

  public deleteRestaurant(id: number, callback: () => void): void {
    this.http.delete(this.host + "/restaurants/" + id).
    subscribe((data) => {
      callback();
    });
  }

  public addMenuItem(food: Food, callback: () => void): void {
    this.http.post<Food>(this.host + "/restaurants/menu", food).
    subscribe((data) => {
      callback();
    });
  }

  public getFullMenu(callback: (foods: Food[]) => void): void {
    this.http.get<Food[]>(this.host + "/restaurants/foods").
    subscribe((foods: Food[]) => {
      callback(foods);
    });
  }

}
