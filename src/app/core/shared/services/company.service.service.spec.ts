import { TestBed } from '@angular/core/testing';

import { Company.ServiceService } from './company.service.service';

describe('Company.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Company.ServiceService = TestBed.get(Company.ServiceService);
    expect(service).toBeTruthy();
  });
});
