import { Component, Directive } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <app-lifecycle *ngIf="!delete" [bindable]="boundValue">
      <p #boundContent>{{test}}</p>
    </app-lifecycle>
    <!--app-db></app-db-->
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed Value'">Click to Change Content</button>
    <button (click)="boundValue = '2000'">Click to Change Binding</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  test = 'Starting Value';
  boundValue = 1000;
}
