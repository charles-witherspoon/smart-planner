import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';
import { v4 as uuid } from 'uuid';

const MOCK_TASKS = [
  {
    id: uuid(),
    title: "Walk dog",
    isComplete: false
  },
  {
    id: uuid(),
    title: "Get oil change",
    isComplete: false
  },
  {
    id: uuid(),
    title: "Groceries",
    isComplete: false
  },
  {
    id: uuid(),
    title: "Finish project 1",
    isComplete: false
  },
];

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  /**
   * List of current tasks
   */
  private _tasks: BehaviorSubject<Task[]> = new BehaviorSubject(MOCK_TASKS);

  constructor() { }


  //#region Public Methods

  /**
   * Gets the list of current tasks
   * 
   * @returns List of current tasks
   */
  get currentTasks(): BehaviorSubject<Task[]> {
    return this._tasks;
  }

  /**
   * Adds a new tasks to the current list of tasks
   * 
   * @param task Task to be added
   */
  public addTask(task: Task): void {
    this._tasks.getValue().push(task);
  }


  /**
   * Removes a task from the list of current tasks
   * 
   * @param id Unique identifier of the task to be deleted
   */
  public deleteTask(id: string): void {
    let updatedTasks = this._tasks.getValue().filter(task => task.id !== id);

    this._tasks.next(updatedTasks);
  }


  /**
   * Updates a task
   * 
   * @param task Task to be updated
   */
  public editTask(changes: Task): void {
    let foundTask: Task | undefined = this._tasks.getValue().find(task => task.id === changes.id);

    if (foundTask) {
      foundTask.title = changes.title;
      foundTask.isComplete = changes.isComplete;
    }
  }

  //#endregion
}
