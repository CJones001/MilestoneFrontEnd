import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Fork Yah!!!';

  displayRestaurant() {
    this.router.navigate(['/list-restaurants']);  }

  displayFullMenu() {
    this.router.navigate(['/list-foods']);
  }



  constructor(private router: Router, private http: HttpClient) {}

}
