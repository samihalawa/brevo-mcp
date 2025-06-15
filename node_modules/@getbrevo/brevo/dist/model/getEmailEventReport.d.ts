import { GetEmailEventReportEventsInner } from './getEmailEventReportEventsInner';
export declare class GetEmailEventReport {
    'events'?: Array<GetEmailEventReportEventsInner>;
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
