import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, forkJoin, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JsonCombinerService {

  constructor(private http: HttpClient) {}

  combineJsonFiles(filePaths: string[]): Observable<any[]> {
    const requests = filePaths.map(filePath => this.http.get<any[]>(filePath));
    return forkJoin(requests).pipe(
        map(results => results.reduce((acc, result) => [...acc, ...result], [])),
        catchError(error => {
          console.error('Error combining JSON files:', error);
          return of([]); // Return an empty array on error
        })
    );
  }
}
