import { TestBed } from '@angular/core/testing';

import { AnimateOberverService } from './animate-oberver.service';

describe('AnimateOberverService', () => {
  let service: AnimateOberverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateOberverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
