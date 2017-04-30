import { TestBed, inject } from '@angular/core/testing';

import { CchdDataService } from './cchd-data.service';

describe('CchdDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CchdDataService]
    });
  });

  it('should ...', inject([CchdDataService], (service: CchdDataService) => {
    expect(service).toBeTruthy();
  }));
});
