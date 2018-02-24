import { TestBed, inject } from '@angular/core/testing';

import { TodoistService } from './todoist.service';

describe('TodoistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoistService]
    });
  });

  it('should be created', inject([TodoistService], (service: TodoistService) => {
    expect(service).toBeTruthy();
  }));
});
