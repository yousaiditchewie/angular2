import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-db',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
   stringInterpolation = "this is a string";
   numberInterpolation = 10;

   onTest() {
     return true;
   }


}
