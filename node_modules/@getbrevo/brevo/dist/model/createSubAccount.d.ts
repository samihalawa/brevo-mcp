export declare class CreateSubAccount {
    'companyName': string;
    'email': string;
    'language'?: CreateSubAccount.LanguageEnum;
    'timezone'?: string;
    'groupIds'?: Array<string>;
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
export declare namespace CreateSubAccount {
    enum LanguageEnum {
        En,
        Fr,
        It,
        Es,
        Pt,
        De
    }
}
