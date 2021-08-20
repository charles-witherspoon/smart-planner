import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from 'src/app/models/event';
import { LogType } from 'src/app/models/log-type';
import { EventService } from 'src/app/services/event.service';
import { LogService } from 'src/app/services/log.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-event-add-dialog',
  templateUrl: './event-add-dialog.component.html',
  styleUrls: ['./event-add-dialog.component.scss']
})
export class EventAddDialogComponent implements OnInit {

  //#region Form

  public titleControl: FormControl;

  public startDateControl: FormControl;

  public durationControl: FormControl;

  public colorControl: FormControl;

  public eventForm: FormGroup;

  public color: string;

  public colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'transparent'];

  //#endregion

  constructor(private logger: LogService, private eventService: EventService) {
    this.titleControl = new FormControl('', [Validators.required]);
    this.startDateControl = new FormControl('', [Validators.required]);
    this.durationControl = new FormControl('', [Validators.required]);
    this.colorControl = new FormControl('', [Validators.required]);
    this.color = '';
    this.eventForm = new FormGroup({
      title: this.titleControl,
      startDate: this.startDateControl,
      duration: this.durationControl,
      color: this.colorControl
    });
  }

  ngOnInit(): void {
  }


  //#region Public Methods

  public createEvent(): void {
    let event: Event = {
      id: uuid(),
      title: this.titleControl.value,
      startDate: new Date(this.startDateControl.value),
      duration: this.durationControl.value,
      color: this.colorControl.value
    }

    console.log(event.startDate);
    this.logger.debug(LogType.Event, `Creating event [Event: ${event.id}]`);

    this.eventService.addEvent(event);
  }

  //#endregion
}
