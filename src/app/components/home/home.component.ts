import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activeTab = 1;

  selectTab(tab: number) {
    this.activeTab = tab;
  }
}
