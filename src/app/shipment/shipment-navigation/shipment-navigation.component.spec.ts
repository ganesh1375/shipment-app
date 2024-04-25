import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentNavigationComponent } from './shipment-navigation.component';

describe('ShipmentNavigationComponent', () => {
  let component: ShipmentNavigationComponent;
  let fixture: ComponentFixture<ShipmentNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentNavigationComponent]
    });
    fixture = TestBed.createComponent(ShipmentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
