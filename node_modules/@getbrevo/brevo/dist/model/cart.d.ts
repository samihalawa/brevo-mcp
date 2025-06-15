export declare class Cart {
    'currency': Cart.CurrencyEnum;
    'specificAmount': number;
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
export declare namespace Cart {
    enum CurrencyEnum {
        Eur
    }
}
