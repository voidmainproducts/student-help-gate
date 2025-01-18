import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NoticesComponent} from "./components/notices/notices.component";
import {HomeComponent} from "./components/home/home.component";
import {EstimateExamScoreListComponent} from "./components/estimate-exam-score-list/estimate-exam-score-list.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {EstimateScoreComponent} from "./components/estimate-score/estimate-score.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'estimate-exam-score-list', component: EstimateExamScoreListComponent },
  { path: 'estimate-score/:id', component: EstimateScoreComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
