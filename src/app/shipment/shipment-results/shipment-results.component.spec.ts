import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ShipmentResultsComponent } from './shipment-results.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ShipmentNavigationComponent } from '../shipment-navigation/shipment-navigation.component';

describe('ShipmentResultsComponent', () => {
  let component: ShipmentResultsComponent;
  let fixture: ComponentFixture<ShipmentResultsComponent>;
  let router: Router;

  beforeEach(() => {
    const activatedRouteMock = {
      snapshot: {
        queryParams: {}
      }
    };
    // const routerMock = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [ShipmentResultsComponent, ShipmentNavigationComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    });
    fixture = TestBed.createComponent(ShipmentResultsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize searchResponse', () => {
    spyOn(sessionStorage, 'getItem').and.returnValue('{"searchResponse": "test"}');
    component.ngOnInit();
    expect(component.searchResponse).toEqual({ searchResponse: 'test' });
  });
  
  it('should navigate to shipment details page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToShipmentDetailsPage(123);
    expect(navigateSpy).toHaveBeenCalledWith(['shipment-details/', 123], { relativeTo: TestBed.inject(ActivatedRoute) });
  });
});
