export declare class GetListsListsInner {
    'id': number;
    'name': string;
    'totalBlacklisted': number;
    'totalSubscribers': number;
    'uniqueSubscribers': number;
    'folderId': number;
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
