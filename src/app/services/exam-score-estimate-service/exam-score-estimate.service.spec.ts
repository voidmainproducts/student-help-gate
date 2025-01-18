import { TestBed } from '@angular/core/testing';

import { ExamScoreEstimateService } from './exam-score-estimate.service';

describe('ExamScoreEstimateService', () => {
  let service: ExamScoreEstimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamScoreEstimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
