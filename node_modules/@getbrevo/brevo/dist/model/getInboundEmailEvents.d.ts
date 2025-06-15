import { GetInboundEmailEventsEventsInner } from './getInboundEmailEventsEventsInner';
export declare class GetInboundEmailEvents {
    'events'?: Array<GetInboundEmailEventsEventsInner>;
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
