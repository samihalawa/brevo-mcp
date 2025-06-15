export declare class GetInboundEmailEventsEventsInner {
    'uuid': string;
    'date': Date;
    'sender': string;
    'recipient': string;
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
