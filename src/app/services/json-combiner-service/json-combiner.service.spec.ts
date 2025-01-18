import { TestBed } from '@angular/core/testing';

import { JsonCombinerService } from './json-combiner.service';

describe('JsonCombinerService', () => {
  let service: JsonCombinerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonCombinerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
