import { TestBed } from '@angular/core/testing';

import { Region.ServiceService } from './region.service.service';

describe('Region.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Region.ServiceService = TestBed.get(Region.ServiceService);
    expect(service).toBeTruthy();
  });
});
