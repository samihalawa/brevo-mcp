export declare class MasterDetailsResponseBillingInfoAddress {
    'streetAddress'?: string;
    'locality'?: string;
    'postalCode'?: string;
    'stateCode'?: string;
    'countryCode'?: string;
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
