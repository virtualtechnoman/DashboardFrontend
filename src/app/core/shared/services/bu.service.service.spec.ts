import { TestBed } from '@angular/core/testing';

import { Bu.ServiceService } from './bu.service.service';

describe('Bu.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Bu.ServiceService = TestBed.get(Bu.ServiceService);
    expect(service).toBeTruthy();
  });
});
