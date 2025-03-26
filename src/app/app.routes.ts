import { Routes } from '@angular/router';
import { CreateRestaurantComponent } from '../create-restaurant/create-restaurant.component';
import { CreateFoodComponent } from '../create-food/create-food.component';
import { ListFoodsComponent } from '../list-foods/list-foods.component';
import { ListRestuarantsComponent } from '../list-restuarants/list-restuarants.component';
import { DisplayRestaurantComponent } from '../display-restaurant/display-restaurant.component';
import { EditRestaurantComponent } from '../edit-restaurant/edit-restaurant.component';
import { DeleteRestaurantComponent } from '../delete-restaurant/delete-restaurant.component';

export const routes: Routes = [
  {path: 'create', component: CreateRestaurantComponent},
  {path: 'create', component: CreateFoodComponent},
  {path: 'list-foods', component: ListFoodsComponent},
  {path: 'list-restuarants', component: ListRestuarantsComponent},
  {path: 'display-restaurant/:id', component: DisplayRestaurantComponent},
  {path: 'edit-restaurant/:id', component: EditRestaurantComponent},
  {path: 'delete-restaurant/:id', component: DeleteRestaurantComponent},
];

export class ApComponent{}
