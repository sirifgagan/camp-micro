import { TestBed, inject } from '@angular/core/testing';

import { CampSelectionSyncService } from './camp-selection-sync.service';

describe('CampSelectionSyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampSelectionSyncService]
    });
  });

  it('should be created', inject([CampSelectionSyncService], (service: CampSelectionSyncService) => {
    expect(service).toBeTruthy();
  }));
});
