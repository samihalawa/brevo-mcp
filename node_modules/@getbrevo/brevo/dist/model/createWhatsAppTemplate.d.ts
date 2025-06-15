export declare class CreateWhatsAppTemplate {
    'name': string;
    'language': string;
    'category': CreateWhatsAppTemplate.CategoryEnum;
    'mediaUrl'?: string;
    'bodyText': string;
    'headerText'?: string;
    'source'?: CreateWhatsAppTemplate.SourceEnum;
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
export declare namespace CreateWhatsAppTemplate {
    enum CategoryEnum {
        Marketing,
        Utility
    }
    enum SourceEnum {
        Automation,
        Conversations
    }
}
