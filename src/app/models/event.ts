export interface Event {
    id: string;
    title: string;
    startDate: Date;
    duration: number;
    color: string;
    width?: number;
    offset?: number;
}