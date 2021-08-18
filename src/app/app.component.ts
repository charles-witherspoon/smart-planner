import { Component } from '@angular/core';
import { Task } from './models/task';
import { Event } from './models/event';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './components/dialog/task-dialog/task-dialog.component';




const MOCK_HOURS = [
  {
    date: new Date('2021-08-15T00:00:00'),
    events: [
      {
        title: "Sleep",
        startDate: new Date('2021-08-15T00:00:00'),
        duration: 360,
        color: "blue",
        width: 50,
        offset: 0
      }
    ]
  },
  {
    date: new Date('2021-08-15T01:00:00'),
    events: [
      {
        title: "Sleep Interruption",
        startDate: new Date('2021-08-15T01:00:00'),
        duration: 120,
        color: "red",
        width: 50,
        offset: 50
      }
    ]
  },
  {
    date: new Date('2021-08-15T02:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T03:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T04:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T05:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T06:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T07:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T08:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T09:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T10:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T11:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T12:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T13:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T14:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T15:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T16:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T17:00:00'),
    events: [
      {
        title: "Gym",
        startDate: new Date('2021-08-15T17:00:00'),
        duration: 90,
        color: "green",
        width: 100,
        offset: 0
      }
    ]
  },
  {
    date: new Date('2021-08-15T18:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T19:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T20:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T21:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T22:00:00'),
    events: [

    ]
  },
  {
    date: new Date('2021-08-15T23:00:00'),
    events: [

    ]
  },
];

export interface Hour {
  date: Date;
  events: Event[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart-planner';
  hours: Hour[] = MOCK_HOURS;

  constructor(private dialog: MatDialog) {

  }

  addTask(): void {
    this.dialog.open(TaskDialogComponent);
  }
  // calculateEventWidth(event: Event): number {
  //   // get number events that would overlap
  //   const flatMap = (f: Function, arr: any[]) => arr.reduce((x, y) => [...x, ...f(y)], [])
  //   const allEvents: Event[] = flatMap([].concat, this.hours.map(hour => hour.events));
  //   const overlappingEvents: Event[] = allEvents.filter(e => this.eventsOverlap(event, e));

  //   // divide 100 by that number
  //   return overlappingEvents.length > 0 ?
  //     100 / overlappingEvents.length
  //     : 100;
  // }

  // eventsOverlap(main: Event, test: Event): boolean {
  //   const mainEnd: Date = main.startDate;
  //   mainEnd.setUTCHours(main.startDate.getHours() + (main.duration / 60));

  //   const testEnd: Date = test.startDate;
  //   testEnd.setUTCHours(test.startDate.getHours() + (test.duration / 60));


  //   return (test.startDate >= main.startDate && test.startDate <= mainEnd)
  //     || (main.startDate >= test.startDate && main.startDate <= testEnd);
  // }
}

