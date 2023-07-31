import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SndeLayoutComponent } from './snde-layout.component';

describe('SndeLayoutComponent', () => {
  let component: SndeLayoutComponent;
  let fixture: ComponentFixture<SndeLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SndeLayoutComponent]
    });
    fixture = TestBed.createComponent(SndeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
