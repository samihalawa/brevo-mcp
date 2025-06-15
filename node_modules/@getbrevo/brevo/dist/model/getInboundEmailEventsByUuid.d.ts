import { GetInboundEmailEventsByUuidAttachmentsInner } from './getInboundEmailEventsByUuidAttachmentsInner';
import { GetInboundEmailEventsByUuidLogsInner } from './getInboundEmailEventsByUuidLogsInner';
export declare class GetInboundEmailEventsByUuid {
    'receivedAt'?: Date;
    'deliveredAt'?: Date;
    'recipient'?: string;
    'sender'?: string;
    'messageId'?: string;
    'subject'?: string;
    'attachments'?: Array<GetInboundEmailEventsByUuidAttachmentsInner>;
    'logs'?: Array<GetInboundEmailEventsByUuidLogsInner>;
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
