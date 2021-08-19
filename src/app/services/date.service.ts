import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../models/event';
import { Hour } from '../models/hour';
import { Day } from '../viewmodel/day';

@Injectable({
  providedIn: 'root'
})
export class DateService {


  //#region Private Properties

  private _currentDate: BehaviorSubject<Date>;

  private _currentDayAsHours: BehaviorSubject<Hour[]>;

  //#endregion

  constructor() {
    this._currentDate = new BehaviorSubject<Date>(new Date());

    const day: Day = new Day(this._currentDate.value);
    this._currentDayAsHours = new BehaviorSubject<Hour[]>(day.hours);
  }


  //#region Public Methods

  public get currentDate(): BehaviorSubject<Date> {
    return this._currentDate;
  }

  public get currentDayAsHours(): BehaviorSubject<Hour[]> {
    return this._currentDayAsHours;
  }

  public addEvent(event: Event): void {

    let containingHour: Hour | undefined = this._currentDayAsHours.getValue()
      .find(hour => this.hourContainsEvent(hour, event));

    if (containingHour) {
      containingHour.events.push(event);

      // Readjust widths and offsets
      this.updateWidthsAndOffsetsForHoursEvents(containingHour);
    }
  }
  //#endregion

  //#region Private Methods

  /**
   * Checks whether an event begins within a specified hour
   * 
   * @param hour Hour to check
   * @param event Event to check 
   * @returns TRUE- event begins within the hour FALSE- event does not begin within the hour
   */
  private hourContainsEvent(hour: Hour, event: Event): boolean {

    console.log(event.startDate);

    if (this.currentDate.getValue().getDate() !== event.startDate.getDate()) {
      return false;
    }

    return hour.time.hours === event.startDate.getHours();
  }


  private updateWidthsAndOffsetsForHoursEvents(hour: Hour): void {

    let events: Event[] = hour.events;

    for (let i = 0; i < events.length; i++) {

      // update width
      events[i].width = 1 / events.length * 100;

      // update offset
      events[i].offset = i * (1 / events.length) * 100;
    }
  }
  //#endregion
}
