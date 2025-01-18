import {Component, OnInit} from '@angular/core';
import {ExamScoreEstimateService} from "../../services/exam-score-estimate-service/exam-score-estimate.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-estimate-score',
  templateUrl: './estimate-score.component.html',
  styleUrl: './estimate-score.component.scss'
})
export class EstimateScoreComponent implements OnInit {
  constructor(private examScoreEstimateService: ExamScoreEstimateService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  exam: any;
  userResponses: { [key: number]: string } = {};
  isSubmitted = false;
  scoreData:any;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.exam = this.examScoreEstimateService.getExam(id);
    console.log(this.exam);
  }

  onSubmit() {
    const score = this.calculateScore();
    this.examScoreEstimateService.saveHistory({
      examName: this.exam.examName,
      date: new Date().toISOString(),
      responses: this.userResponses,
      score
    });
    this.scoreData = { exam: this.exam, userResponses: this.userResponses, score };
    console.log(this.scoreData);
    this.isSubmitted = true;
    // this.router.navigate(['/result'], { state: { exam: this.exam, userResponses: this.userResponses, score } });
  }

  calculateScore() {
    let score = 0;
    this.exam.questions.forEach((q: any) => {
      const userAnswer = this.userResponses[q.questionNumber];
      if (userAnswer === q.answer) {
        score += this.exam.markingScheme.correct;
      } else if (userAnswer) {
        score += this.exam.markingScheme.incorrect;
      }
    });
    return score;
  }


  restart() {
    this.router.navigateByUrl("/").then(() => {
      this.router.navigateByUrl("/estimate-score/"+this.exam.id);
    });
  }
}
