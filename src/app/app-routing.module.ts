import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  redirectTo: "home-page",
  pathMatch: 'full'
},
{
  path: "home-page",
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
},
{
  path: "search-result",
  loadChildren: () => import('./shipment/shipment.module').then(m => m.ShipmentModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
