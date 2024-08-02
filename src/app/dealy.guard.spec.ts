import { TestBed } from '@angular/core/testing';

import { DealyGuard } from './dealy.guard';

describe('DealyGuard', () => {
  let guard: DealyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DealyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
