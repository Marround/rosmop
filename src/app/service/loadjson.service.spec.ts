import { TestBed, inject } from '@angular/core/testing';

import { LoadjsonService } from './loadjson.service';

describe('LoadjsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadjsonService]
    });
  });

  it('should be created', inject([LoadjsonService], (service: LoadjsonService) => {
    expect(service).toBeTruthy();
  }));
});
