import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module/material.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { LogService } from './services/log.service';
import { TaskAddDialogComponent } from './components/dialog/task-add-dialog/task-add-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { TimePipe } from './pipes/time.pipe';
import { TaskDeleteDialogComponent } from './components/dialog/task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from './components/dialog/task-edit-dialog/task-edit-dialog.component';
import { EventAddDialogComponent } from './components/dialog/event-add-dialog/event-add-dialog.component';
import { DateService } from './services/date.service';
import { EventService } from './services/event.service';
import { TaskService } from './services/task.service';
import { EventRangeFilterPipe } from './pipes/event-range.filter.pipe';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { DayComponent } from './components/day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskAddDialogComponent,
    EventsComponent,
    TaskDeleteDialogComponent,
    TaskEditDialogComponent,
    EventAddDialogComponent,
    TimePipe,
    EventRangeFilterPipe,
    MonthViewComponent,
    DayViewComponent,
    DayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    LogService,
    DateService,
    EventService,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
