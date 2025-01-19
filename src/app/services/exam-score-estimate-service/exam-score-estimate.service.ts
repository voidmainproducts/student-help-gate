import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiUrl} from "../../../constants/api.url";
import {environment} from "../../../environments/environment.production";
import {LoadingService} from "../loading/loading.service";

@Injectable({
    providedIn: 'root'
})
export class ExamScoreEstimateService {
    constructor(private http: HttpClient) {
    }

    private history: any[] = JSON.parse(localStorage.getItem('history') || '[]');

    getExams() {
        let request = {
            "context": {
                "examId": "list"
            },
            "trace": false
        }
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('X-Access-Token', environment.token);
        return this.http.post(ApiUrl.examEstimateListUrl, request, {headers: headers});
    }

    getExam(id: string) {
        let request = {
                "context": {
                    "examId": id
                },
                "trace": false
            }
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('X-Access-Token', environment.token);
        return this.http.post(ApiUrl.examEstimateListUrl, request, {headers: headers});
    }

    saveHistory(record: any) {
        this.history.push(record);
        localStorage.setItem('history', JSON.stringify(this.history));
    }

    getHistory() {
        return this.history;
    }
}
