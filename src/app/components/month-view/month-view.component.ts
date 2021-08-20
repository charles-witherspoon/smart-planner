import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //#region Public Methods


  public goToDay(): void {
    this.router.navigate(['day']);
  }

  //#endregion
}
