import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './authGuard.service';

describe('AuthService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
