import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuploaddocumentComponent } from './viewuploaddocument.component';

describe('ViewuploaddocumentComponent', () => {
  let component: ViewuploaddocumentComponent;
  let fixture: ComponentFixture<ViewuploaddocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuploaddocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuploaddocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
