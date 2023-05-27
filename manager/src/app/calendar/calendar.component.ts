import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selectedDate: Date | undefined;

  addEvent(type: string, event: MatDatepickerInputEvent<Date>): void {
    this.selectedDate = event.value;
    console.log('Selected date:', this.selectedDate);
  }
}