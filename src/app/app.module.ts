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

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskAddDialogComponent,
    EventsComponent,
    TimePipe,
    TaskDeleteDialogComponent,
    TaskEditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
