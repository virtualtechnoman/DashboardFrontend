import { TestBed } from '@angular/core/testing';

import { District.ServiceService } from './district.service.service';

describe('District.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: District.ServiceService = TestBed.get(District.ServiceService);
    expect(service).toBeTruthy();
  });
});
