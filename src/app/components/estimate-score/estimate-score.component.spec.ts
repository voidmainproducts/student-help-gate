import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateScoreComponent } from './estimate-score.component';

describe('EstimateScoreComponent', () => {
  let component: EstimateScoreComponent;
  let fixture: ComponentFixture<EstimateScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstimateScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
