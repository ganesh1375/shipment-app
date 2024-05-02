import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-shipment-results',
  templateUrl: './shipment-results.component.html',
  styleUrls: ['./shipment-results.component.scss']
})
export class ShipmentResultsComponent {

  constructor(private readonly router: Router, private route: ActivatedRoute) { }
  searchResponse: any;
  showSearchResult = true;

  ngOnInit() {
    this.searchResponse = JSON.parse(sessionStorage.getItem('searchResponse') as any);
  }

  navigateToShipmentDetailsPage(shipmentId: any) {
    this.showSearchResult = false;
    this.router.navigate([`shipment-details/`, shipmentId], { relativeTo: this.route });
  }
}
