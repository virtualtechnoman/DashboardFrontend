import { TestBed } from '@angular/core/testing';

import { HeaderinterceptorService } from './headerinterceptor.service';

describe('HeaderinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderinterceptorService = TestBed.get(HeaderinterceptorService);
    expect(service).toBeTruthy();
  });
});
