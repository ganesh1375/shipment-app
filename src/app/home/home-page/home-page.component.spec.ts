import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { SearchService } from 'src/app/services/search.service';
import { BehaviorSubject, of, subscribeOn, throwError } from 'rxjs';
import { FormControl, FormGroup, FormsModule, NgControl, NgForm, NgModel, NgModelGroup } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  const searchService = {
    searchAndNavigate: function (form: any) {
      return true;
    },
    searchResultResponse$: new BehaviorSubject<any>('No Results Found'),
  };

  beforeEach(() => {

    const sessionStorageMock = {
      removeItem: function (value: any) {
        sessionStorage.removeItem(value);
      }
    };

    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [TranslateModule.forRoot(), FormsModule],
      providers: [{ provide: SearchService, useValue: searchService }, { provide: sessionStorage, useValue: sessionStorageMock }, TranslateService]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should remove searchResponse from sessionStorage and set hideWarning to false on ngOnInit', () => {
    spyOn(sessionStorage, 'removeItem');
    component.ngOnInit();
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('searchResponse');
    expect(component.hideWarning).toBeFalsy();
  });

  it('should test onSubmit function', () => {
    spyOn(searchService, 'searchAndNavigate');
    let form: any = {
      value: {
        email: 'test',
        shipment: 'SHSFHIGI',
        firstname: "Ganesh"
      },
    }
    component.onSubmit(form);
    expect(searchService.searchAndNavigate).toHaveBeenCalledWith(form);
  });

  it('should hide warning on searchService error', () => {
    const error = 'Test error';
    searchService.searchResultResponse$ = new BehaviorSubject(null);
    component.onSubmit(null);
    searchService.searchResultResponse$.error(error);
    expect(component.hideWarning).toBeTrue();
  });

  it('should reset form and set hideWarning to false on resetForm', () => {
    const mockForm = { reset: jasmine.createSpy('reset') } as unknown as NgForm;
    component.hideWarning = true;
    component.resetForm(mockForm);
    expect(component.hideWarning).toBeFalsy();
  });

});
