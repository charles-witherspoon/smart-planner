import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material-module/material.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { LogService } from './services/log.service';
import { TaskDialogComponent } from './components/dialog/task-dialog/task-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './components/events/events.component';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDialogComponent,
    EventsComponent,
    TimePipe,
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
