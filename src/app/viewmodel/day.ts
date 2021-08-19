import { Time } from "@angular/common";
import { Hour } from "../models/hour";

export class Day {

    //#region private Properties

    /**
     * The calendar date
     */
    public _date: Date;

    /**
     * The hours within the day
     */
    private _hours: Hour[];

    //#endregion

    constructor(date: Date) {
        this._date = date;
        this._hours = Day.generateHours(date);
    }


    //#region Private Methods

    /**
     * Creates and returns an array of hours representing a full day
     * 
     * @param date The date to be represented as an array of hours
     * @returns Array of hours
     */
    private static generateHours(date: Date): Hour[] {

        let midnight: Date = date;
        midnight.setHours(0, 0, 0, 0);

        let current: Time = {
            hours: midnight.getHours(),
            minutes: 0
        }

        let hours: Hour[] = [];

        for (let i = 0; i < 24; i++) {
            hours.push({
                time: {
                    hours: current.hours,
                    minutes: 0
                },
                events: []
            });

            current.hours = current.hours + 1;
        }

        return hours;
    }

    //#endregion


    //#region Public Methods


    /**
     * The hours within the day
     */
    public get hours(): Hour[] {
        return this._hours;
    }

    //#endregion
}
