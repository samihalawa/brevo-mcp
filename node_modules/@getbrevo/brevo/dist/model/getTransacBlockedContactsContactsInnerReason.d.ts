export declare class GetTransacBlockedContactsContactsInnerReason {
    'code'?: GetTransacBlockedContactsContactsInnerReason.CodeEnum;
    'message'?: string;
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
export declare namespace GetTransacBlockedContactsContactsInnerReason {
    enum CodeEnum {
        UnsubscribedViaMa,
        UnsubscribedViaEmail,
        AdminBlocked,
        UnsubscribedViaApi,
        HardBounce,
        ContactFlaggedAsSpam
    }
}
