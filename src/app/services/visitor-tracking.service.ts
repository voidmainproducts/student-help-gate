import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackingService {
  private visitorCount = 0;

  incrementVisitor(): void {
    this.visitorCount++;
  }

  getVisitorCount(): number {
    return this.visitorCount;
  }
}
