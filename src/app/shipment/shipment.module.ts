import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentRoutingModule } from './shipment-routing';
import { ShipmentResultsComponent } from './shipment-results/shipment-results.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ShipmentNavigationComponent } from './shipment-navigation/shipment-navigation.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchService } from '../services/search.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ShipmentResultsComponent, ShipmentDetailsComponent, ShipmentNavigationComponent],
  imports: [
    CommonModule,
    ShipmentRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  providers : [SearchService]
})
export class ShipmentModule { }
