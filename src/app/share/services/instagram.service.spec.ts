import { TestBed } from '@angular/core/testing';

import { InstagramService } from './instagram.service';

describe('InstragramService', () => {
  let service: InstagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});