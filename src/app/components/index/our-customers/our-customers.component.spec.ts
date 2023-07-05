import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCustomersComponent } from './our-customers.component';

describe('OurCustomersComponent', () => {
  let component: OurCustomersComponent;
  let fixture: ComponentFixture<OurCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCustomersComponent]
    });
    fixture = TestBed.createComponent(OurCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
