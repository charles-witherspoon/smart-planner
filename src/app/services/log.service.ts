import { Injectable } from '@angular/core';
import { LogType } from '../models/log-type';

export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}

@Injectable({
  providedIn: 'root'
})
export class LogService {


  //#region Public Properties

  /**
   * All - 0
   * Debug - 1
   * Info - 2
   * Warn - 3
   * Error - 4
   * Fatal - 5
   * Off - 6
   */
  level: LogLevel = LogLevel.All;


  //#endregion

  constructor() { }


  //#region Logging

  /**
   * Adds a message to the log with LogLevel.ALL
   * 
   * @param type The area of the application the message pertains to
   * @param msg The log message
   */
  log(type: LogType, msg: any): void {
    this.addMessage(LogLevel.All, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.DEBUG
   * 
   * @param type The area of the application the message pertains to
   * @param msg The debug message
   */
  debug(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Debug, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.INFO
   * 
   * @param type The area of the application the message pertains to
   * @param msg The info message
   */
  info(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Info, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.WARN
   * 
   * @param type The area of the application the message pertains to
   * @param msg The warning message
   */
  warn(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Warn, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.ERROR
   * 
   * @param type The area of the application the message pertains to
   * @param msg The error message
   */
  error(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Error, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.FATAL
   * 
   * @param type The area of the application the message pertains to
   * @param msg The fatal message
   */
  fatal(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Fatal, type, msg);
  }

  /**
   * Adds a timestamped message to the log
   * 
   * @param level The severity of the message
   * @param type The area of the application the message pertains to
   * @param msg The message to be logged
   */
  private addMessage(level: LogLevel, type: LogType, msg: any) {
    console.log(`${new Date()} [Level: ${level} Type: ${type}]: ` + JSON.stringify(msg));
  }

  //#endregion

}
