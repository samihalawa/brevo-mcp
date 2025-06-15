export declare class GetInboundEmailEventsByUuidLogsInner {
    'date'?: Date;
    'type'?: GetInboundEmailEventsByUuidLogsInner.TypeEnum;
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
export declare namespace GetInboundEmailEventsByUuidLogsInner {
    enum TypeEnum {
        Received,
        Processed,
        WebhookFailed,
        WebhookDelivered
    }
}
