import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Inline HTML</h1>
      <fa-other></fa-other>
      <fa-another></fa-another>
      <fa-another></fa-another>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it';
}
