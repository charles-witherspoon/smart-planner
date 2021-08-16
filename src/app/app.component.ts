import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart-planner';
  tasks: Task[] = [
    {
      title: "Walk dog",
      isComplete: false
    },
    {
      title: "Get oil change",
      isComplete: false
    },
    {
      title: "Groceries",
      isComplete: false
    },
    {
      title: "Finish project 1",
      isComplete: false
    },
    {
      title: "Walk dog",
      isComplete: false
    },
    {
      title: "Get oil change",
      isComplete: false
    },
    {
      title: "Groceries",
      isComplete: false
    },
    {
      title: "Finish project 1",
      isComplete: false
    },
    {
      title: "Walk dog",
      isComplete: false
    },
    {
      title: "Get oil change",
      isComplete: false
    },
    {
      title: "Groceries",
      isComplete: false
    },
    {
      title: "Finish project 1",
      isComplete: false
    },
    {
      title: "Walk dog",
      isComplete: false
    },
    {
      title: "Get oil change",
      isComplete: false
    },
    {
      title: "Groceries",
      isComplete: false
    },
    {
      title: "Finish project 1",
      isComplete: false
    },
    {
      title: "Walk dog",
      isComplete: false
    },
    {
      title: "Get oil change",
      isComplete: false
    },
    {
      title: "Groceries",
      isComplete: false
    },
    {
      title: "Finish project 1",
      isComplete: false
    },
    {
      title: "Walk dog",
      isComplete: false
    },
    {
      title: "Get oil change",
      isComplete: false
    },
    {
      title: "Groceries",
      isComplete: false
    },
    {
      title: "Finish project 1",
      isComplete: false
    },
  ];
  hours: Date[] = [
    new Date('2021-08-15T00:00:00'),
    new Date('2021-08-15T01:00:00'),
    new Date('2021-08-15T02:00:00'),
    new Date('2021-08-15T03:00:00'),
    new Date('2021-08-15T04:00:00'),
    new Date('2021-08-15T05:00:00'),
    new Date('2021-08-15T06:00:00'),
    new Date('2021-08-15T07:00:00'),
    new Date('2021-08-15T08:00:00'),
    new Date('2021-08-15T09:00:00'),
    new Date('2021-08-15T10:00:00'),
    new Date('2021-08-15T11:00:00'),
    new Date('2021-08-15T12:00:00'),
    new Date('2021-08-15T13:00:00'),
    new Date('2021-08-15T14:00:00'),
    new Date('2021-08-15T15:00:00'),
    new Date('2021-08-15T16:00:00'),
    new Date('2021-08-15T17:00:00'),
    new Date('2021-08-15T18:00:00'),
    new Date('2021-08-15T19:00:00'),
    new Date('2021-08-15T20:00:00'),
    new Date('2021-08-15T21:00:00'),
    new Date('2021-08-15T22:00:00'),
    new Date('2021-08-15T23:00:00'),
  ];
}

