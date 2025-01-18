import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamScoreEstimateService {
  private exams: any[] = [
    {
      id:1,
      examName: 'Sample Exam',
      markingScheme: { correct: 4, incorrect: -1 },
      questions: [
        {
          questionNumber: 1,
          options: ['A', 'B', 'C', 'D'],
          answer: 'B'
        },
        {
          questionNumber: 2,
          options: ['A', 'B', 'C', 'D   '],
          answer: 'B'
        }
      ]
    }
  ];

  private history: any[] = JSON.parse(localStorage.getItem('history') || '[]');

  getExams() {
    return this.exams;
  }

  getExam(id: number) {
    return this.exams.find(x => x.id === id);
  }

  saveHistory(record: any) {
    this.history.push(record);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  getHistory() {
    return this.history;
  }
}
