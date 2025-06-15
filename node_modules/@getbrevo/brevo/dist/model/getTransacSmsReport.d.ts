import { GetTransacSmsReportReportsInner } from './getTransacSmsReportReportsInner';
export declare class GetTransacSmsReport {
    'reports'?: Array<GetTransacSmsReportReportsInner>;
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
