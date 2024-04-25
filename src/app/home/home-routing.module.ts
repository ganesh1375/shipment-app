import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchService } from '../services/search.service';

const routes: Routes = [
  {
    path: "",
    component : HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers : [SearchService]
})
export class HomeRoutingModule { }
