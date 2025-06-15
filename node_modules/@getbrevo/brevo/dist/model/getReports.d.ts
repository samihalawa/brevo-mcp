import { GetReportsReportsInner } from './getReportsReportsInner';
export declare class GetReports {
    'reports'?: Array<GetReportsReportsInner>;
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
