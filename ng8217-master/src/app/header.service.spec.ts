import { TestBed } from '@angular/core/testing';

import { HeaderService } from './services/header.service';

describe('HeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderService = TestBed.get(HeaderService);
    expect(service).toBeTruthy();
  });
});
