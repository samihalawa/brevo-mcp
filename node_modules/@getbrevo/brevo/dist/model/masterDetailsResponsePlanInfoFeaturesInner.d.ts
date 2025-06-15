export declare class MasterDetailsResponsePlanInfoFeaturesInner {
    'name'?: string;
    'unitValue'?: string;
    'quantity'?: number;
    'quantityWithOverages'?: number;
    'used'?: number;
    'usedOverages'?: number;
    'remaining'?: number;
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
