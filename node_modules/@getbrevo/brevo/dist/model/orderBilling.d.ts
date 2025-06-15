export declare class OrderBilling {
    'address'?: string;
    'city'?: string;
    'countryCode'?: string;
    'country'?: string;
    'phone'?: string;
    'postCode'?: string;
    'paymentMethod'?: string;
    'region'?: string;
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
