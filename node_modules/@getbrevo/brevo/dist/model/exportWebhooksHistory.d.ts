export declare class ExportWebhooksHistory {
    'days'?: number;
    'startDate'?: string;
    'endDate'?: string;
    'sort'?: string;
    'type': ExportWebhooksHistory.TypeEnum;
    'event': ExportWebhooksHistory.EventEnum;
    'notifyURL': string;
    'webhookId'?: number;
    'email'?: string;
    'messageId'?: number;
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
export declare namespace ExportWebhooksHistory {
    enum TypeEnum {
        Transactional,
        Marketing
    }
    enum EventEnum {
        InvalidParameter,
        MissingParameter,
        HardBounce,
        SoftBounce,
        Delivered,
        Spam,
        Request,
        Opened,
        Click,
        Invalid,
        Deferred,
        Blocked,
        Unsubscribed,
        Error,
        UniqueOpened,
        LoadedByProxy,
        AllEvents
    }
}
