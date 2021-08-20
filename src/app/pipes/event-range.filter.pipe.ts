import { Pipe, PipeTransform } from "@angular/core";
import { Event } from "../models/event";


@Pipe({
    name: 'range',
    pure: false
})
export class EventRangeFilterPipe implements PipeTransform {

    transform(events: Event[], filter: { start: number, end: number }): Event[] {

        if (!events || !filter) {
            return events;
        }

        return events.filter(
            item =>
                item.startDate.getMinutes() >= filter.start
                && item.startDate.getMinutes() < filter.end);
    }
}