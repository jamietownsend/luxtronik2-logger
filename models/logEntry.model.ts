export interface ILogEntry {
    dateTime?: String;
    data?: any;
}

export class LogEntry implements ILogEntry {
    constructor(
        dateTime?: String,
        data?: any,
    ) { }
}
