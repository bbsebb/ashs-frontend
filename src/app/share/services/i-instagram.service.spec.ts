import { TestBed } from '@angular/core/testing';

import { IInstagramService } from './i-instagram.service';

describe('IInstagramService', () => {
  let service: IInstagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IInstagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
