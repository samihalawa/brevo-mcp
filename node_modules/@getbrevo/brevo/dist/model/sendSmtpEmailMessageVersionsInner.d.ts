import { SendSmtpEmailBccInner } from './sendSmtpEmailBccInner';
import { SendSmtpEmailCcInner } from './sendSmtpEmailCcInner';
import { SendSmtpEmailMessageVersionsInnerReplyTo } from './sendSmtpEmailMessageVersionsInnerReplyTo';
import { SendSmtpEmailMessageVersionsInnerToInner } from './sendSmtpEmailMessageVersionsInnerToInner';
export declare class SendSmtpEmailMessageVersionsInner {
    'to': Array<SendSmtpEmailMessageVersionsInnerToInner>;
    'params'?: {
        [key: string]: object;
    };
    'bcc'?: Array<SendSmtpEmailBccInner>;
    'cc'?: Array<SendSmtpEmailCcInner>;
    'replyTo'?: SendSmtpEmailMessageVersionsInnerReplyTo;
    'subject'?: string;
    'htmlContent'?: string;
    'textContent'?: string;
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
