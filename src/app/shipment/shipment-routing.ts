import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentResultsComponent } from './shipment-results/shipment-results.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';

const routes: Routes = [{
    path: "",
    component: ShipmentResultsComponent
}, {
    path: "shipment-details/:id",
    component: ShipmentDetailsComponent
},
{
    path: "shipment-details",
    redirectTo: "",
    pathMatch: "full"
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShipmentRoutingModule { }
