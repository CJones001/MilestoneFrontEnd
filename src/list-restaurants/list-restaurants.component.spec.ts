import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurantsComponent } from './list-restaurants.component';

describe('ListRestaurantsComponent', () => {
  let component: ListRestaurantsComponent;
  let fixture: ComponentFixture<ListRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRestaurantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
