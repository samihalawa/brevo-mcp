import { GetSmsEventReportEventsInner } from './getSmsEventReportEventsInner';
export declare class GetSmsEventReport {
    'events'?: Array<GetSmsEventReportEventsInner>;
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
