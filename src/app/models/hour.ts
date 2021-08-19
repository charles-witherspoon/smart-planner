import { Time } from "@angular/common";
import { Event } from "./event";

export interface Hour {
    time: Time;
    events: Event[];
}