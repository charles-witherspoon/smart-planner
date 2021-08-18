import { Component, OnInit } from '@angular/core';
import { Hour } from 'src/app/app.component';

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


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  //#region Public Properties

  hours: Hour[] = MOCK_HOURS;

  //#endregion

  constructor() { }

  ngOnInit(): void {
  }

}
