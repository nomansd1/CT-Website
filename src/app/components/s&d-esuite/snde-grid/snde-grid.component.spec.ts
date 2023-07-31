import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SndeGridComponent } from './snde-grid.component';

describe('SndeGridComponent', () => {
  let component: SndeGridComponent;
  let fixture: ComponentFixture<SndeGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SndeGridComponent]
    });
    fixture = TestBed.createComponent(SndeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
