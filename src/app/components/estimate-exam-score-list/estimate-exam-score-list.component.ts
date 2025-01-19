import { Component } from '@angular/core';
import {ExamScoreEstimateService} from "../../services/exam-score-estimate-service/exam-score-estimate.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-estimate-exam-score-list',
  templateUrl: './estimate-exam-score-list.component.html',
  styleUrl: './estimate-exam-score-list.component.scss'
})
export class EstimateExamScoreListComponent {
  exams:any[] =[];

  constructor(private examService: ExamScoreEstimateService, private router: Router) {
    this.exams = examService.getExams();
  }

  onSelectExam(index: string) {
    this.router.navigate(['/estimate-score', index]);
  }
}
