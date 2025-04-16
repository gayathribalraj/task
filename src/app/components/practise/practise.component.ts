import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-practise',
  imports: [],
  templateUrl: './practise.component.html',
  styleUrl: './practise.component.scss'
})
export class PractiseComponent {

numbers:number[]=[1,2,3,4,5,6,7,8,9,0];
eventNumber:number[]=[];


evenNumber(){
  this.eventNumber= this.numbers.filter(num => num%2 === 0);
}
}







