export declare class TaskReminder {
    'value': number;
    'unit': TaskReminder.UnitEnum;
    'types': Array<string>;
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
export declare namespace TaskReminder {
    enum UnitEnum {
        Minutes,
        Hours,
        Weeks,
        Days
    }
}
