import { TestBed } from '@angular/core/testing';

import { HomrServiceService } from './home-service.service';

describe('HomrServiceService', () => {
  let service: HomrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
