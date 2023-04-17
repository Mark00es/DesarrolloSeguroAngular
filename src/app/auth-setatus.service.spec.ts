import { TestBed } from '@angular/core/testing';

import { AuthSetatusService } from './auth-setatus.service';

describe('AuthSetatusService', () => {
  let service: AuthSetatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSetatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
