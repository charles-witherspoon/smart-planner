import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  //#region Private Properties

  //#endregion

  //#region Public Properties

  /**
   * Used to determine the target month; necessary to determine correct weekday info
   */
  public eventDay: BehaviorSubject<Date>;

  //#endregion

  constructor(private dateService: DateService) {
    this.eventDay = this.dateService.currentDate;
  }

  ngOnInit(): void {
  }

}
