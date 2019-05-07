import { TestBed } from '@angular/core/testing';

import { ProgramEntriesService } from './program-entries.service';

describe('ProgramEntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramEntriesService = TestBed.get(ProgramEntriesService);
    expect(service).toBeTruthy();
  });
});
