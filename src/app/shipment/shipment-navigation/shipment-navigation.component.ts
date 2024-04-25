import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shipment-navigation',
  templateUrl: './shipment-navigation.component.html',
  styleUrls: ['./shipment-navigation.component.scss']
})
export class ShipmentNavigationComponent {
  constructor(private readonly router: Router, private route: ActivatedRoute) { }

  @Input() shipmentNumber: any;

  navigateToHomePage() {
    this.router.navigateByUrl('home-page');
  }

  navigateToPreviousPage() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }
}
