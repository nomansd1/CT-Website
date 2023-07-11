import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechGridComponent } from './tech-grid.component';

describe('TechGridComponent', () => {
  let component: TechGridComponent;
  let fixture: ComponentFixture<TechGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechGridComponent]
    });
    fixture = TestBed.createComponent(TechGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
