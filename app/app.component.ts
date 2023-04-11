import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  ngOnInit() {}

  checked: boolean = false;

  check() {
    if (!this.checked) {
      this.checked = false;
    } else {
      this.checked = true;
    }
  }
}
