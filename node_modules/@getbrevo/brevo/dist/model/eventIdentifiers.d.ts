export declare class EventIdentifiers {
    'emailId'?: string;
    'phoneId'?: string;
    'whatsappId'?: string;
    'landlineNumberId'?: string;
    'extId'?: string;
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
