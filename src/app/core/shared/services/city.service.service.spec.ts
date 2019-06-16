import { TestBed } from '@angular/core/testing';

import { City.ServiceService } from './city.service.service';

describe('City.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: City.ServiceService = TestBed.get(City.ServiceService);
    expect(service).toBeTruthy();
  });
});
