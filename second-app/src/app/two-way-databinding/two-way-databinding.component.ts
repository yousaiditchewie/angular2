import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  template: `
    <input type="text" ((ngModel))="person.name">
    <input type="text" ((ngModel))="person.name">
  `,
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent {

  person = {
    name: 'Jacob',
    age: 30
  }

}
