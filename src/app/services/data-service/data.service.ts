import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
    data: any;
    getData() {
    return of(this.data);
    }
}
