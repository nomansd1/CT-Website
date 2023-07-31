import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SndeBannerComponent } from './snde-banner.component';

describe('SndeBannerComponent', () => {
  let component: SndeBannerComponent;
  let fixture: ComponentFixture<SndeBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SndeBannerComponent]
    });
    fixture = TestBed.createComponent(SndeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
