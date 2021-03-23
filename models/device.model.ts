import { Moment } from 'moment';

export interface IDevice {
    // id field will be used to identify the collection in mongoDB
    id?: string;
    description?: string;
}

export class Device implements IDevice {
    constructor(
        id?: string,
        description?: string,
    ) { }
}
