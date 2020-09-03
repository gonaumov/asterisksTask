import { TestBed } from '@angular/core/testing';

import { AsterisksService } from './asterisks.service';

describe('AsterisksService', () => {
  let service: AsterisksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsterisksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
