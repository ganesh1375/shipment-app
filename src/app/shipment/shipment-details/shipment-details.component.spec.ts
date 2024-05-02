import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentDetailsComponent } from './shipment-details.component';
import { BehaviorSubject, of } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { ShipmentNavigationComponent } from '../shipment-navigation/shipment-navigation.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

describe('ShipmentDetailsComponent', () => {
  let component: ShipmentDetailsComponent;
  let fixture: ComponentFixture<ShipmentDetailsComponent>;
  let shipmentDetails = [{
    "AssignedToUserId": "user1",
    "Status": "In Transit",
    "DeliveryMethod": "SHP",
    "ExpectedShipmentDate": "01-02-2024",
    "OrderNo": "ORD100001",
    "ScacAndService": "UPSNGround",
    "ShipmentKey": "ORD100001_SHPKEY",
    "ShipmentNo": "ORD100001SHPNO",
    "BillToAddress": {
      "FirstName": "John",
      "LastName": "Doe",
      "EmailID": "john@example.com",
      "Phonenumber": "987654321",
      "AddressID": "100001",
      "AddressLine1": "123 Main Street",
      "AddressLine2": "",
      "City": "Anytown",
      "Country": "US",
      "State": "CA",
      "ZipCode": "12345",
      "PersonInfoKey": "100001"
    },
    "ToAddress": {
      "FirstName": "Jane",
      "LastName": "Smith",
      "EmailID": "jane@example.com",
      "DayPhone": "123456789",
      "AddressID": "100002",
      "AddressLine1": "456 Elm Street",
      "AddressLine2": "",
      "City": "Otherville",
      "Country": "US",
      "State": "NY",
      "ZipCode": "54321",
      "PersonInfoKey": "100002"
    },
    "ShipmentLines": {
      "TotalNumberOfRecords": "4",
      "ShipmentLine": [
        {
          "Quantity": "2",
          "ShipmentLineKey": "ORD100001SHPLINEKEY",
          "OrderLine": {
            "ItemDetails": {
              "DisplayUnitOfMeasure": "Each",
              "Description": "Product A",
              "ImageUrl": "../../../assets/product_a.jpg",
              "ItemID": "100001"
            }
          }
        },
        {
          "Quantity": "1",
          "ShipmentLineKey": "ORD100001SHPLINEKEY",
          "OrderLine": {
            "ItemDetails": {
              "DisplayUnitOfMeasure": "Each",
              "Description": "Product B",
              "ImageUrl": "../../../assets/product_b.jpg",
              "ItemID": "100002"
            }
          }
        },
        {
          "Quantity": "1",
          "ShipmentLineKey": "ORD100001SHPLINEKEY",
          "OrderLine": {
            "ItemDetails": {
              "DisplayUnitOfMeasure": "Each",
              "Description": "Product C",
              "ImageUrl": "../../../assets/product_c.jpg",
              "ItemID": "100003"
            }
          }
        }
      ]
    }
  }]
  const searchService = {
    searchAndNavigate: function (form: any) {
      return true;
    },
    getShipmentDetails: function (shipmentId: any) {
      return shipmentDetails;
    },
    searchResultResponse$: new BehaviorSubject<any>('No Results Found')
  };

  const activatedRouteMock = {
    params: of({ id: '123' })
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentDetailsComponent, ShipmentNavigationComponent],
      imports : [NgbCollapse],
      providers: [{ provide: SearchService, useValue: searchService }, {provide : ActivatedRoute, useValue : activatedRouteMock}]
    });
    fixture = TestBed.createComponent(ShipmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the shipment Details based on the route params', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.ngOnInit).toBeDefined();
    expect(component.shipmentDetails).toEqual(shipmentDetails);
  })
});
