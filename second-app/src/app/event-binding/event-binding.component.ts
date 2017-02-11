import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click Me!</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();
  onClicked() {
    this.clicked.emit("It Works!");
  }

}
