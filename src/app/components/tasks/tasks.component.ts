import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/models/task';
import { LogService } from 'src/app/services/log.service';
import { TaskService } from 'src/app/services/task.service';
import { BehaviorSubject } from 'rxjs';
import { TaskDeleteDialogComponent } from '../dialog/task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from '../dialog/task-edit-dialog/task-edit-dialog.component';
import { LogType } from 'src/app/models/log-type';
import { TaskAddDialogComponent } from '../dialog/task-add-dialog/task-add-dialog.component';


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
   * 
   * @param task Task to be edited
   */
  public onTaskClick(task: Task): void {
    this.dialog.open(TaskEditDialogComponent, {
      data: {
        task: task
      },
      panelClass: 'custom-modalbox'
    });
  }

  /**
   * Fired when checkbox is checked
   * 
   * @param task Task to mark as complete
   */
  public onCheck(task: Task): void {
  }

  /**
   * Fired when delete is clicked
   * 
   * @param task Task to be deleted
   */
  public onTaskDelete(task: Task): void {
    this.dialog.open(TaskDeleteDialogComponent, {
      data: {
        id: task.id
      }
    });
  }

  /**
   * Fired when add task button is clicked
   */
  public onAddTask(): void {
    this.dialog.open(TaskAddDialogComponent);
  }

  //#endregion
}
