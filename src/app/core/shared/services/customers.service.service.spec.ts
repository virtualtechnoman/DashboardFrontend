import { TestBed } from '@angular/core/testing';

import { Customers.ServiceService } from './customers.service.service';

describe('Customers.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Customers.ServiceService = TestBed.get(Customers.ServiceService);
    expect(service).toBeTruthy();
  });
});
