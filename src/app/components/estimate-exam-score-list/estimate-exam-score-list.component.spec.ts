import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateExamScoreListComponent } from './estimate-exam-score-list.component';

describe('EstimateExamScoreListComponent', () => {
  let component: EstimateExamScoreListComponent;
  let fixture: ComponentFixture<EstimateExamScoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstimateExamScoreListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateExamScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
