import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.scss']
})
export class ShipmentDetailsComponent {
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }
  shipmentNo: any;
  shipmentDetails: any;
  isCollapsed = true;
  
  ngOnInit() {
    this.route.params.subscribe(data => {
      this.shipmentNo = data['id'];
      this.shipmentDetails = this.searchService.getShipmentDetails(this.shipmentNo);
    });
  }
}
