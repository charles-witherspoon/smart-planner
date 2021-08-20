import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayViewComponent } from './components/day-view/day-view.component';
import { MonthViewComponent } from './components/month-view/month-view.component';

const routes: Routes = [
  { path: '', component: MonthViewComponent },
  // { path: '', component: DayViewComponent },
  { path: 'day', component: DayViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
