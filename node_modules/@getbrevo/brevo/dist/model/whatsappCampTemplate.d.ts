import { ComponentItems } from './componentItems';
import { VariablesItems } from './variablesItems';
export declare class WhatsappCampTemplate {
    'name'?: string;
    'category'?: string;
    'language'?: string;
    'containsButton'?: boolean;
    'displayHeader'?: boolean;
    'headerType'?: string;
    'components'?: Array<ComponentItems>;
    'headerVariables'?: Array<VariablesItems>;
    'bodyVariables'?: Array<VariablesItems>;
    'buttonType'?: string;
    'hideFooter'?: boolean;
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
