import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student-help';
  isCollapsed = false;
  bannerMessage = 'This site is not affiliated with BPSC. Its a personal project to help students in their journey';

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
