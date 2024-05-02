import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentNavigationComponent } from './shipment-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('ShipmentNavigationComponent', () => {
  let component: ShipmentNavigationComponent;
  let fixture: ComponentFixture<ShipmentNavigationComponent>;
  let mockActivatedRoute: any;
  let mockRouter: any;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj(['navigateByUrl', 'navigate']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['']);
    TestBed.configureTestingModule({
      declarations: [ShipmentNavigationComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: mockRouter }, { provide: ActivatedRoute, useValue: mockActivatedRoute }]
    });
    fixture = TestBed.createComponent(ShipmentNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to homepage', () => {
    component.navigateToHomePage();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('home-page');
  });

  it('should navigate back to previous page', () => {
    component.navigateToPreviousPage();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['../'], { relativeTo: TestBed.inject(ActivatedRoute) });
  })
});
