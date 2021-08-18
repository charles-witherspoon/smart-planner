import { Component } from '@angular/core';
import { Task } from './models/task';
import { Event } from './models/event';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './components/dialog/task-dialog/task-dialog.component';
import { LogService } from './services/log.service';
import { LogType } from './models/log-type';





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

  constructor(private logger: LogService, private dialog: MatDialog) {

  }

  addTask(): void {
    this.dialog.open(TaskDialogComponent);
  }

  addEvent(): void {
    this.logger.debug(LogType.Application, 'Add event');
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

