import { Component } from '@angular/core';
import {LoadingService} from "../../services/loading/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {

  loading = false;
  constructor(private loadingService: LoadingService) {
    loadingService.loading$.subscribe(loading => {
      this.loading = loading;
    })
  }

}
