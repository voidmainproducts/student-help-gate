import {Component, OnInit} from '@angular/core';
import {ExamScoreEstimateService} from "../../services/exam-score-estimate-service/exam-score-estimate.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadingService} from "../../services/loading/loading.service";

@Component({
  selector: 'app-estimate-score',
  templateUrl: './estimate-score.component.html',
  styleUrl: './estimate-score.component.scss'
})
export class EstimateScoreComponent implements OnInit {
  selectedSet: string = '';
  constructor(private examScoreEstimateService: ExamScoreEstimateService,
              private route: ActivatedRoute,
              private loadingService: LoadingService,
              private router: Router) {
  }


  exam: any;
  userResponses: { [key: number]: string } = {};
  isSubmitted = false;
  scoreData:any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.loadingService.show();
    this.examScoreEstimateService.getExam(id || '').subscribe((response:any) => {
      this.exam = response.result.data;
      console.log(this.exam);
      this.loadingService.hide();
    })
  }

  onSubmit(setKey:string) {
    const score = this.calculateScore(setKey);
    this.examScoreEstimateService.saveHistory({
      examName: this.exam.examName,
      date: new Date().toISOString(),
      responses: this.userResponses,
      score
    });
    this.scoreData = {setKey:setKey, exam: this.exam, userResponses: this.userResponses, score, maxScore: this.exam.data[setKey].length*this.exam.markingScheme.correct };
    console.log(this.scoreData);
    this.isSubmitted = true;
    // this.router.navigate(['/result'], { state: { exam: this.exam, userResponses: this.userResponses, score } });
  }

  calculateScore(setKey:string) {
    let score = 0;
    this.exam.data[setKey].forEach((q: any) => {
      const userAnswer = this.userResponses[q.questionNumber];
      if (userAnswer === q.answerKey) {
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

  protected readonly Object = Object;

  onSetSelect(setKey:string) {
    // console.log(setKey);
    this.selectedSet = setKey
  }
}
