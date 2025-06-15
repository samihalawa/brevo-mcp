export declare class GetWhatsappEventReportEventsInner {
    'contactNumber': string;
    'date': string;
    'messageId': string;
    'event': GetWhatsappEventReportEventsInner.EventEnum;
    'reason'?: string;
    'body'?: string;
    'mediaUrl'?: string;
    'senderNumber': string;
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
export declare namespace GetWhatsappEventReportEventsInner {
    enum EventEnum {
        Sent,
        Delivered,
        Read,
        Error,
        Unsubscribe,
        Reply,
        SoftBounce
    }
}
