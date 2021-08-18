import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { LogType } from 'src/app/models/log-type';
import { LogService } from 'src/app/services/log.service';
import { TaskDialogComponent } from '../dialog/task-dialog/task-dialog.component';
import { TaskService } from 'src/app/services/task.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {


  //#region Public Properties

  /**
   * List of tasks
   */
  task$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  //#endregion

  constructor(private logger: LogService, private dialog: MatDialog, private taskService: TaskService) { }

  ngOnInit(): void {
    this.task$ = this.taskService.getTasks();
  }


  onClick(): void {
    this.logger.debug(LogType.Task, 'Task clicked');

    this.dialog.open(TaskDialogComponent);
  }

}
