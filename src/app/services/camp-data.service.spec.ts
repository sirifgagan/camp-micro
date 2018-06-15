import { TestBed, inject } from '@angular/core/testing';

import { CampDataService } from './camp-data.service';

describe('CampDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampDataService]
    });
  });

  it('should be created', inject([CampDataService], (service: CampDataService) => {
    expect(service).toBeTruthy();
  }));
});
