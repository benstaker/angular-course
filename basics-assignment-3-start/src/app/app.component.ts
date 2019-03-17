import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: Boolean = false;
  log: String[] = [];

  onDisplayDetails() {
    this.displayDetails = true;
    this.log.push(Date.now().toString());
  }

  isColoured(item) {
    return this.log.indexOf(item) >= 4;
  }
}
