import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LogType } from 'src/app/models/log-type';
import { LogService } from 'src/app/services/log.service';
import { EventAddDialogComponent } from '../dialog/event-add-dialog/event-add-dialog.component';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  //#region Public Properties

  /**
   * The current page
   */
  public route: string;
  //#endregion

  constructor(private logger: LogService, private dialog: MatDialog, private router: Router) {
    this.route = '';

  }

  ngOnInit(): void {
    this.route = this.router.url;
    console.log(this.route)
  }


  //#region Public Methods


  public planDay(): void {
    this.logger.debug(LogType.Application, 'Plan day')
  }

  public addEvent(): void {
    this.dialog.open(EventAddDialogComponent);
  }

  public goToCalendar(): void {
    this.router.navigate(['']);
  }

  public goToDay(): void {
    if (this.route === '/day') {
      this.router.navigate(['']);
    } else {

      this.router.navigate(['/day']);
    }

  }
  //#endregion
}
