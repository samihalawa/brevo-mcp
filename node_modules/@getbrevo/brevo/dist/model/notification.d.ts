export declare class Notification {
    'channel': Notification.ChannelEnum;
    'text': string;
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
export declare namespace Notification {
    enum ChannelEnum {
        Email
    }
}
