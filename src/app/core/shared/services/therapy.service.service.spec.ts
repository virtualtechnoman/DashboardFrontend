import { TestBed } from '@angular/core/testing';

import { Therapy.ServiceService } from './therapy.service.service';

describe('Therapy.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Therapy.ServiceService = TestBed.get(Therapy.ServiceService);
    expect(service).toBeTruthy();
  });
});
