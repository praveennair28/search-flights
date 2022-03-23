import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CommonService } from './service/common_service';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
     providers: [CommonService,HttpClient,HttpHandler],
     imports:[BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      NgbModule],
      declarations: [
        AppComponent,
        SearchBarComponent,
        DatePickerComponent,
        FlightDetailComponent,
        LoadingIndicatorComponent,
        ValidationMessageComponent
      ],
    }).compileComponents();
  }));

  
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.airportList = ['Dubai','London'];
    component.airports = ['Dubai','London'];
    component.flightList = ['flight1','flight22'];
    component.leavingFrom_placeholder = "Leaving from";
    component.goingTo_placeholder ="Going to";;
    component.showFlightList = false;
    component.showloadingIndicator = false;
    component.showValidationMsg = false;
    component.validationMsg = "Invalid";
    component.searchDate = "2022-03-03";
    component.leavingFrom = "DXB";
    component.leavingCityName = "Dubai";
    component.goingTo = "LHR";
    component.goingToCityName = "London";
    component.airportList = ['1','2'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnInit', () => {
    component.ngOnInit();
    expect(component.airportList).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('get airport list called', async(() =>
  {
    let cmnService = fixture.debugElement.injector.get(CommonService);   

    component.loadAirportList();
    expect(component.loadAirportList()).toBeTruthy();
  
  }));

  it('get flight list', async(() =>
  {
    let cmnService = fixture.debugElement.injector.get(CommonService);  

    component.getFlightStatus();
  
  }));

  it('get flight list called', async(() =>
  {
    let cmnService = fixture.debugElement.injector.get(CommonService);  

    component.getFlightStatus();
  
  }));

  it('validate() called', async(() =>
  {
    component.searchDate=null;
    component.validationMsg = '';
    component.validate();  
  }));

  it('setGoingTo() called and value assigned', () =>{
    var goingTO = "Going to";
    component.setGoingTo(goingTO);

    expect(component.goingTo).toEqual(goingTO);
  })

  it('setLeavingFrom() called and value assigned', () =>{
    var leavingFrom = "Leaving from";
    component.setLeavingFrom(leavingFrom);

    expect(component.leavingFrom).toEqual(leavingFrom);
  })

  it('setDate() called and value assigned', () =>{
    var searchDate = "2022-03-10";
    component.setDate(searchDate);

    expect(component.searchDate).toEqual(searchDate);
  })

});
