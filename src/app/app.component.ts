import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student-help';
  isCollapsed = false;
  bannerMessage = 'Welcome to the Dashboard!';

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
