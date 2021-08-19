import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { LogService } from 'src/app/services/log.service';
import { TaskDialogComponent } from '../dialog/task-dialog/task-dialog.component';
import { TaskService } from 'src/app/services/task.service';
import { BehaviorSubject } from 'rxjs';
import { TaskDeleteDialogComponent } from '../dialog/task-delete-dialog/task-delete-dialog.component';


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
  public task$: BehaviorSubject<Task[]>;

  //#endregion

  constructor(private logger: LogService, private dialog: MatDialog, private taskService: TaskService) {
    this.task$ = new BehaviorSubject<Task[]>([]);
  }

  ngOnInit(): void {
    this.task$ = this.taskService.currentTasks;
  }


  //#region Public Methods


  /**
   * Fired when a task is clicked
   */
  public onTaskClick(): void {
    this.dialog.open(TaskDialogComponent);
  }

  public onTaskDelete(task: Task): void {
    this.dialog.open(TaskDeleteDialogComponent, {
      data: {
        id: task.id
      }
    });
  }

  //#endregion
}
