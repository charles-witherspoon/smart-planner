import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'time'
})
export class TimePipe implements PipeTransform {

    transform(n: number, args?: any): any {
        return n < 24 ?
            `${(n + 11) % 12 + 1} ${n < 12 ? 'AM' : 'PM'}`
            : n;
    }
}