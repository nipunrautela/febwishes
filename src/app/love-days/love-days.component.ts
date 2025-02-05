import { Component } from '@angular/core';
import days, { Day } from './days_data'


@Component({
  selector: 'app-love-days',
  templateUrl: './love-days.component.html',
  styleUrl: './love-days.component.css'
})
export class LoveDaysComponent {

  days: Day[] = days;

}
