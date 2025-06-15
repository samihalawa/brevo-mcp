import { EventIdentifiers } from './eventIdentifiers';
export declare class Event {
    'eventName': string;
    'eventDate'?: string;
    'identifiers': EventIdentifiers;
    'contactProperties'?: object;
    'eventProperties'?: object;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
