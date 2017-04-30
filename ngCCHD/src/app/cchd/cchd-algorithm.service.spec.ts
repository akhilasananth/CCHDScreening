import { TestBed, inject } from '@angular/core/testing';

import { CchdAlgorithmService } from './cchd-algorithm.service';

describe('CchdAlgorithmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CchdAlgorithmService]
    });
  });

  it('should ...', inject([CchdAlgorithmService], (service: CchdAlgorithmService) => {
    expect(service).toBeTruthy();
  }));
});
