import { Component } from '@angular/core';
import days, { Day } from './days_data'


@Component({
  selector: 'app-love-days',
  templateUrl: './love-days.component.html',
  styleUrl: './love-days.component.css'
})
export class LoveDaysComponent {

  days: Day[] = days;

  todayDate = new Date().getDate();
  tomorrowDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getDate();

  filteredDays = days.filter(day => (day.date.getDate() === this.todayDate || day.date.getDate() === this.tomorrowDate));
}
