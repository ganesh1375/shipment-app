import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, throwError } from 'rxjs';
import { SearchService } from './search.service';
import { Shipments } from './shipmentResultResponse';


describe('SearchService', () => {
  let service: SearchService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SearchService]
    });
    service = TestBed.inject(SearchService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('searchAndNavigate', () => {
    it('should navigate to search result if form has empty values', () => {
      spyOn(sessionStorage, 'setItem');
      spyOn(router, 'navigateByUrl');
      const form = { value: {} } as NgForm;
      service.searchAndNavigate(form);
      expect(sessionStorage.setItem).toHaveBeenCalledWith('searchResponse', JSON.stringify(Shipments));
      expect(router.navigateByUrl).toHaveBeenCalledWith('search-result');
    });

    it('should filter and navigate to search result if form values match', () => {
      spyOn(sessionStorage, 'setItem');
      spyOn(router, 'navigateByUrl');
      const form = { value: { order: 'ORD100001' } } as NgForm;
      service.searchAndNavigate(form);
      expect(sessionStorage.setItem).toHaveBeenCalled();
      expect(router.navigateByUrl).toHaveBeenCalledWith('search-result');
    });

    it('should emit error if no results found', () => {
      spyOn(service.searchResultResponse$, 'error');
      const form = { value: { order: '100' } } as NgForm; // Non-existent order number
      service.searchAndNavigate(form);
      expect(service.searchResultResponse$.error).toHaveBeenCalledWith('No Results Found');
    });
  });

  describe('getShipmentDetails', () => {
    it('should return shipment details by shipment number', () => {
      const shipmentNo = 'ORD100001SHPNO';
      const shipmentDetails = service.getShipmentDetails(shipmentNo);
      expect(shipmentDetails.length).toBe(1);
      expect(shipmentDetails[0].ShipmentNo).toBe(shipmentNo);
    });
  });

  describe('verifyFormHasEmptyValues', () => {
    it('should return true if form has empty values', () => {
      const form = { value: { order: '', shipment: '', firstname: '', lastname: '', email: '', phone: '' } } as NgForm;
      const result = service.verifyFormHasEmptyValues(form);
      expect(result).toBeTrue();
    });

    it('should return false if form has non-empty values', () => {
      const form = { value: { order: '1', shipment: '', firstname: '', lastname: '', email: '', phone: '' } } as NgForm;
      const result = service.verifyFormHasEmptyValues(form);
      expect(result).toBeFalse();
    });
  });
});
