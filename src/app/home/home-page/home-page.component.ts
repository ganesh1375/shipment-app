import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private searchService: SearchService) {
  }
  hideWarning = false;

  ngOnInit() {
    sessionStorage.removeItem('searchResponse');
    this.hideWarning = false;
  }

  onSubmit(form: any) {
    this.searchService.searchAndNavigate(form);
    this.searchService.searchResultResponse$.subscribe(() => {
    }, _error => {
      this.hideWarning = true;
    }
    )
  }

  resetForm(form: any) {
    this.hideWarning = false;
    form.reset();
  }
}
