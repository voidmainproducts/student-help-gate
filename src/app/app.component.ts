import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student-help';
  isCollapsed = false;
  banner: boolean = false;

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
