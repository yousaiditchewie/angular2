import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  selector: 'app-root',
  template: `
      <h1>Root Component</h1>
      <app-databinding></app-databinding>
  `,
    directives: [DatabindingComponent]
})
export class AppComponent {
  title = 'I changed it';
}
