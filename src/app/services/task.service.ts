import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';

const MOCK_TASKS = [
  {
    title: "Walk dog",
    isComplete: false
  },
  {
    title: "Get oil change",
    isComplete: false
  },
  {
    title: "Groceries",
    isComplete: false
  },
  {
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
    let updatedTasks = this._tasks.getValue();
    updatedTasks.push(task);
    this._tasks.next(updatedTasks);
  }

  //#endregion
}
