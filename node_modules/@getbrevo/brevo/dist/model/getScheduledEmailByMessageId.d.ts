export declare class GetScheduledEmailByMessageId {
    'scheduledAt': Date;
    'createdAt': Date;
    'status': GetScheduledEmailByMessageId.StatusEnum;
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
export declare namespace GetScheduledEmailByMessageId {
    enum StatusEnum {
        InProgress,
        Queued,
        Processed,
        Error
    }
}
