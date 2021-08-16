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
}

