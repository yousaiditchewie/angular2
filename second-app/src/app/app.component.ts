import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <app-db></app-db>
  `,
  directives: [DatabindingComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
