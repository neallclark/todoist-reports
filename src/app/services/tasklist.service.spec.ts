import { TestBed, inject } from '@angular/core/testing';

import { TasklistService } from './tasklist.service';

describe('TasklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasklistService]
    });
  });

  it('should be created', inject([TasklistService], (service: TasklistService) => {
    expect(service).toBeTruthy();
  }));
});
