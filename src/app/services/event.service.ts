import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../models/event';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //#region Private Properties

  private _events: BehaviorSubject<Event[]>;

  //#endregion


  constructor(private dateService: DateService) {
    this._events = new BehaviorSubject<Event[]>([]);
  }

  //#region Public Methods

  public get events(): BehaviorSubject<Event[]> {
    return this._events;
  }

  public addEvent(event: Event): void {
    this._events.getValue().push(event);

    this.dateService.addEvent(event);
  }

  //#endregion

}
