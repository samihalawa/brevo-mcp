import { SendSmtpEmailAttachmentInner } from './sendSmtpEmailAttachmentInner';
import { SendSmtpEmailBccInner } from './sendSmtpEmailBccInner';
import { SendSmtpEmailCcInner } from './sendSmtpEmailCcInner';
import { SendSmtpEmailMessageVersionsInner } from './sendSmtpEmailMessageVersionsInner';
import { SendSmtpEmailReplyTo } from './sendSmtpEmailReplyTo';
import { SendSmtpEmailSender } from './sendSmtpEmailSender';
import { SendSmtpEmailToInner } from './sendSmtpEmailToInner';
export declare class SendSmtpEmail {
    'sender'?: SendSmtpEmailSender;
    'to'?: Array<SendSmtpEmailToInner>;
    'bcc'?: Array<SendSmtpEmailBccInner>;
    'cc'?: Array<SendSmtpEmailCcInner>;
    'htmlContent'?: string;
    'textContent'?: string;
    'subject'?: string;
    'replyTo'?: SendSmtpEmailReplyTo;
    'attachment'?: Array<SendSmtpEmailAttachmentInner>;
    'headers'?: object;
    'templateId'?: number;
    'params'?: object;
    'messageVersions'?: Array<SendSmtpEmailMessageVersionsInner>;
    'tags'?: Array<string>;
    'scheduledAt'?: Date;
    'batchId'?: string;
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
