import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../models/event';
import { Hour } from '../models/hour';
import { Day } from '../viewmodel/day';
import { v4 as uuid } from 'uuid';

const MOCK_HOURS: Hour[] = [
  {
    time: {
      hours: 0,
      minutes: 0
    },
    events: [
      {
        id: uuid(),
        title: "Sleep",
        startDate: new Date('2021-08-15T00:00:00'),
        duration: 360,
        color: "blue",
      }
    ]
  },
  {
    time: {
      hours: 1,
      minutes: 0
    },
    events: [
      {
        id: uuid(),
        title: "Sleep Interruption",
        startDate: new Date('2021-08-15T01:00:00'),
        duration: 120,
        color: "red",
      }
    ]
  },
  {
    time: {
      hours: 2,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 3,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 4,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 5,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 6,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 7,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 8,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 9,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 10,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 11,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 12,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 13,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 14,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 15,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 16,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 17,
      minutes: 0
    },
    events: [
      {
        id: uuid(),
        title: "Gym",
        startDate: new Date('2021-08-15T17:00:00'),
        duration: 90,
        color: "green",
      }
    ]
  },
  {
    time: {
      hours: 18,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 19,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 20,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 21,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 22,
      minutes: 0
    },
    events: []
  },
  {
    time: {
      hours: 23,
      minutes: 0
    },
    events: []
  },
];

@Injectable({
  providedIn: 'root'
})
export class DateService {


  //#region Private Properties

  private _currentDate: BehaviorSubject<Date>;

  private _currentDayAsHours: BehaviorSubject<Hour[]>;

  //#endregion

  constructor() {
    let currentDate: Date = new Date();


    this._currentDate = new BehaviorSubject<Date>(currentDate);

    const day: Day = new Day(this._currentDate.value);
    // this._currentDayAsHours = new BehaviorSubject<Hour[]>(day.hours);
    this._currentDayAsHours = new BehaviorSubject<Hour[]>(MOCK_HOURS);
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

    if (this.currentDate.getValue().toISOString().split('T')[0] !== event.startDate.toISOString().split('T')[0]) {
      return false;
    }

    return hour.time.hours === event.startDate.getHours();
  }


  //#endregion
}
