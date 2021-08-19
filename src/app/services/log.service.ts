import { Injectable } from '@angular/core';
import { LogType } from '../models/log-type';

export enum LogLevel {
  All = "ALL",
  Debug = "DEBUG",
  Info = "INFO",
  Warn = "WARN",
  Error = "ERROR"
}

@Injectable({
  providedIn: 'root'
})
export class LogService {

  //#region Public Properties

  /**
   * The level of the log, used for filtering messages
   * 
   * All | Debug | Info | Warn | Error | Fatal | Off
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
  public log(type: LogType, msg: any): void {
    this.addMessage(LogLevel.All, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.DEBUG
   * 
   * @param type The area of the application the message pertains to
   * @param msg The debug message
   */
  public debug(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Debug, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.INFO
   * 
   * @param type The area of the application the message pertains to
   * @param msg The info message
   */
  public info(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Info, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.WARN
   * 
   * @param type The area of the application the message pertains to
   * @param msg The warning message
   */
  public warn(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Warn, type, msg);
  }

  /**
   * Adds a message to the log with LogLevel.ERROR
   * 
   * @param type The area of the application the message pertains to
   * @param msg The error message
   */
  public error(type: LogType, msg: any): void {
    this.addMessage(LogLevel.Error, type, msg);
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
