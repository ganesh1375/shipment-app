import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { Shipments } from './shipmentResultResponse';
import { Shipment } from './shipmentDetails';

@Injectable()
export class SearchService {

  public searchResultResponse$: BehaviorSubject<any> = new BehaviorSubject<any>('');

  filteredShipmentDetails: any;


  constructor(private readonly router: Router) { }


  searchAndNavigate(searchedValue: NgForm): any {
    if (this.verifyFormHasEmptyValues(searchedValue)) {
      sessionStorage.setItem('searchResponse', JSON.stringify(Shipments));
      this.router.navigateByUrl('search-result');
    } else {
      this.filteredShipmentDetails = Shipments.Shipment.filter(shipment => {
        return (searchedValue.value.order?.toLowerCase() === shipment.OrderNo.toLowerCase()) || (searchedValue.value.shipment?.toLowerCase() === shipment.ShipmentNo.toLowerCase()) || (searchedValue.value.firstname?.toLowerCase() === shipment.BillToAddress.FirstName.toLowerCase()) || (searchedValue.value.lastname?.toLowerCase() === shipment.BillToAddress.LastName.toLowerCase()) || (searchedValue.value.email?.toLowerCase() === shipment.BillToAddress.EMailID.toLowerCase()) || (searchedValue.value.phone?.toLowerCase() === shipment.BillToAddress.DayPhone.toLowerCase())
      });
      if (this.filteredShipmentDetails.length > 0) {
        let ShipmentFiltered = {
          TotalNumberOfRecords: this.filteredShipmentDetails.length,
          Shipment: this.filteredShipmentDetails
        }
        sessionStorage.setItem('searchResponse', JSON.stringify(ShipmentFiltered));
        this.router.navigateByUrl('search-result')
      } else {
        this.searchResultResponse$.error("No Results Found");
      }

    }
  }

  getShipmentDetails(shipmentNo: any) {
    let shipmentDetails = Shipment.filter(shipment => shipment.ShipmentNo === shipmentNo);
    return shipmentDetails;
  }

  verifyFormHasEmptyValues(form: NgForm) {
    let objectKeys = Object.keys(form.value);
    for (let key of objectKeys) {
      if (form.value[key] !== "" && form.value[key] !== null) {
        return false;
      }
    }
    return true;
  }
}
