"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./accountApi"), exports);
const accountApi_1 = require("./accountApi");
__exportStar(require("./companiesApi"), exports);
const companiesApi_1 = require("./companiesApi");
__exportStar(require("./contactsApi"), exports);
const contactsApi_1 = require("./contactsApi");
__exportStar(require("./conversationsApi"), exports);
const conversationsApi_1 = require("./conversationsApi");
__exportStar(require("./couponsApi"), exports);
const couponsApi_1 = require("./couponsApi");
__exportStar(require("./dealsApi"), exports);
const dealsApi_1 = require("./dealsApi");
__exportStar(require("./domainsApi"), exports);
const domainsApi_1 = require("./domainsApi");
__exportStar(require("./ecommerceApi"), exports);
const ecommerceApi_1 = require("./ecommerceApi");
__exportStar(require("./emailCampaignsApi"), exports);
const emailCampaignsApi_1 = require("./emailCampaignsApi");
__exportStar(require("./eventsApi"), exports);
const eventsApi_1 = require("./eventsApi");
__exportStar(require("./externalFeedsApi"), exports);
const externalFeedsApi_1 = require("./externalFeedsApi");
__exportStar(require("./filesApi"), exports);
const filesApi_1 = require("./filesApi");
__exportStar(require("./inboundParsingApi"), exports);
const inboundParsingApi_1 = require("./inboundParsingApi");
__exportStar(require("./masterAccountApi"), exports);
const masterAccountApi_1 = require("./masterAccountApi");
__exportStar(require("./notesApi"), exports);
const notesApi_1 = require("./notesApi");
__exportStar(require("./paymentsApi"), exports);
const paymentsApi_1 = require("./paymentsApi");
__exportStar(require("./processApi"), exports);
const processApi_1 = require("./processApi");
__exportStar(require("./resellerApi"), exports);
const resellerApi_1 = require("./resellerApi");
__exportStar(require("./sMSCampaignsApi"), exports);
const sMSCampaignsApi_1 = require("./sMSCampaignsApi");
__exportStar(require("./sendersApi"), exports);
const sendersApi_1 = require("./sendersApi");
__exportStar(require("./tasksApi"), exports);
const tasksApi_1 = require("./tasksApi");
__exportStar(require("./transactionalEmailsApi"), exports);
const transactionalEmailsApi_1 = require("./transactionalEmailsApi");
__exportStar(require("./transactionalSMSApi"), exports);
const transactionalSMSApi_1 = require("./transactionalSMSApi");
__exportStar(require("./transactionalWhatsAppApi"), exports);
const transactionalWhatsAppApi_1 = require("./transactionalWhatsAppApi");
__exportStar(require("./userApi"), exports);
const userApi_1 = require("./userApi");
__exportStar(require("./webhooksApi"), exports);
const webhooksApi_1 = require("./webhooksApi");
__exportStar(require("./whatsAppCampaignsApi"), exports);
const whatsAppCampaignsApi_1 = require("./whatsAppCampaignsApi");
class HttpError extends Error {
    constructor(response, body, statusCode) {
        super('HTTP request failed');
        this.response = response;
        this.body = body;
        this.statusCode = statusCode;
        this.name = 'HttpError';
    }
}
exports.HttpError = HttpError;
exports.APIS = [accountApi_1.AccountApi, companiesApi_1.CompaniesApi, contactsApi_1.ContactsApi, conversationsApi_1.ConversationsApi, couponsApi_1.CouponsApi, dealsApi_1.DealsApi, domainsApi_1.DomainsApi, ecommerceApi_1.EcommerceApi, emailCampaignsApi_1.EmailCampaignsApi, eventsApi_1.EventsApi, externalFeedsApi_1.ExternalFeedsApi, filesApi_1.FilesApi, inboundParsingApi_1.InboundParsingApi, masterAccountApi_1.MasterAccountApi, notesApi_1.NotesApi, paymentsApi_1.PaymentsApi, processApi_1.ProcessApi, resellerApi_1.ResellerApi, sMSCampaignsApi_1.SMSCampaignsApi, sendersApi_1.SendersApi, tasksApi_1.TasksApi, transactionalEmailsApi_1.TransactionalEmailsApi, transactionalSMSApi_1.TransactionalSMSApi, transactionalWhatsAppApi_1.TransactionalWhatsAppApi, userApi_1.UserApi, webhooksApi_1.WebhooksApi, whatsAppCampaignsApi_1.WhatsAppCampaignsApi];
//# sourceMappingURL=apis.js.map