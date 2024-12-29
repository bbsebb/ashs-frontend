import { TestBed } from '@angular/core/testing';

import { StubInstagramService } from './stub-instagram.service';

describe('StubInstagramService', () => {
  let service: StubInstagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StubInstagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
