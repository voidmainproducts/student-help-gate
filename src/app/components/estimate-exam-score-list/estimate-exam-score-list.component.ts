import { Component } from '@angular/core';
import {ExamScoreEstimateService} from "../../services/exam-score-estimate-service/exam-score-estimate.service";
import {Router} from "@angular/router";
import {LoadingService} from "../../services/loading/loading.service";

@Component({
  selector: 'app-estimate-exam-score-list',
  templateUrl: './estimate-exam-score-list.component.html',
  styleUrl: './estimate-exam-score-list.component.scss'
})
export class EstimateExamScoreListComponent {
  exams:any[] =[];

  constructor(private examService: ExamScoreEstimateService,
              private router: Router,
              private loadingService:LoadingService) {

    loadingService.show();
    examService.getExams().subscribe((response:any) => {
      this.exams = response.result.data;
      loadingService.hide();
    });
  }

  onSelectExam(index: string) {
    this.router.navigate(['/estimate-score', index]);
  }
}
