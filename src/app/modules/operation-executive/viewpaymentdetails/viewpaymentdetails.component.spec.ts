import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentdetailsComponent } from './viewpaymentdetails.component';

describe('ViewpaymentdetailsComponent', () => {
  let component: ViewpaymentdetailsComponent;
  let fixture: ComponentFixture<ViewpaymentdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpaymentdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
