import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestuarantsComponent } from './list-restuarants.component';

describe('ListRestuarantsComponent', () => {
  let component: ListRestuarantsComponent;
  let fixture: ComponentFixture<ListRestuarantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRestuarantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRestuarantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
