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
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./abTestCampaignResult"), exports);
__exportStar(require("./abTestCampaignResultClickedLinks"), exports);
__exportStar(require("./abTestCampaignResultStatistics"), exports);
__exportStar(require("./abTestVersionClicksInner"), exports);
__exportStar(require("./abTestVersionStats"), exports);
__exportStar(require("./addChildDomain"), exports);
__exportStar(require("./addContactToList"), exports);
__exportStar(require("./addCredits"), exports);
__exportStar(require("./authenticateDomainModel"), exports);
__exportStar(require("./blockDomain"), exports);
__exportStar(require("./cart"), exports);
__exportStar(require("./companiesIdPatchRequest"), exports);
__exportStar(require("./companiesLinkUnlinkIdPatchRequest"), exports);
__exportStar(require("./companiesList"), exports);
__exportStar(require("./companiesPost200Response"), exports);
__exportStar(require("./companiesPostRequest"), exports);
__exportStar(require("./company"), exports);
__exportStar(require("./companyAttributesInner"), exports);
__exportStar(require("./componentItems"), exports);
__exportStar(require("./configuration"), exports);
__exportStar(require("./conversationsAgentOnlinePingPostRequest"), exports);
__exportStar(require("./conversationsMessage"), exports);
__exportStar(require("./conversationsMessageFile"), exports);
__exportStar(require("./conversationsMessageFileImageInfo"), exports);
__exportStar(require("./conversationsMessagesIdPutRequest"), exports);
__exportStar(require("./conversationsMessagesPostRequest"), exports);
__exportStar(require("./conversationsPushedMessagesIdPutRequest"), exports);
__exportStar(require("./conversationsPushedMessagesPostRequest"), exports);
__exportStar(require("./conversionSourceMetrics"), exports);
__exportStar(require("./conversionSourceProduct"), exports);
__exportStar(require("./corporateGroupDetailsResponse"), exports);
__exportStar(require("./corporateGroupDetailsResponseGroup"), exports);
__exportStar(require("./corporateGroupDetailsResponseSubAccountsInner"), exports);
__exportStar(require("./corporateGroupDetailsResponseUsersInner"), exports);
__exportStar(require("./corporateGroupPost201Response"), exports);
__exportStar(require("./corporateGroupPostRequest"), exports);
__exportStar(require("./corporateGroupUnlinkGroupIdSubAccountsPutRequest"), exports);
__exportStar(require("./corporateSubAccountIpAssociatePostRequest"), exports);
__exportStar(require("./corporateSubAccountIpDissociatePutRequest"), exports);
__exportStar(require("./corporateUserInvitationActionEmailPut200Response"), exports);
__exportStar(require("./createApiKeyRequest"), exports);
__exportStar(require("./createApiKeyResponse"), exports);
__exportStar(require("./createAttribute"), exports);
__exportStar(require("./createAttributeEnumerationInner"), exports);
__exportStar(require("./createCategoryModel"), exports);
__exportStar(require("./createChild"), exports);
__exportStar(require("./createContact"), exports);
__exportStar(require("./createCouponCollection201Response"), exports);
__exportStar(require("./createCouponCollectionRequest"), exports);
__exportStar(require("./createCouponsRequest"), exports);
__exportStar(require("./createDoiContact"), exports);
__exportStar(require("./createDomain"), exports);
__exportStar(require("./createDomainModel"), exports);
__exportStar(require("./createDomainModelDnsRecords"), exports);
__exportStar(require("./createDomainModelDnsRecordsDkimRecord"), exports);
__exportStar(require("./createEmailCampaign"), exports);
__exportStar(require("./createEmailCampaignRecipients"), exports);
__exportStar(require("./createEmailCampaignSender"), exports);
__exportStar(require("./createExternalFeed"), exports);
__exportStar(require("./createExternalFeed201Response"), exports);
__exportStar(require("./createList"), exports);
__exportStar(require("./createModel"), exports);
__exportStar(require("./createPaymentRequest"), exports);
__exportStar(require("./createPaymentResponse"), exports);
__exportStar(require("./createProductModel"), exports);
__exportStar(require("./createReseller"), exports);
__exportStar(require("./createSender"), exports);
__exportStar(require("./createSenderIpsInner"), exports);
__exportStar(require("./createSenderModel"), exports);
__exportStar(require("./createSmsCampaign"), exports);
__exportStar(require("./createSmsCampaignRecipients"), exports);
__exportStar(require("./createSmtpEmail"), exports);
__exportStar(require("./createSmtpTemplate"), exports);
__exportStar(require("./createSmtpTemplateSender"), exports);
__exportStar(require("./createSubAccount"), exports);
__exportStar(require("./createSubAccountResponse"), exports);
__exportStar(require("./createUpdateBatchCategory"), exports);
__exportStar(require("./createUpdateBatchCategoryModel"), exports);
__exportStar(require("./createUpdateBatchProducts"), exports);
__exportStar(require("./createUpdateBatchProductsModel"), exports);
__exportStar(require("./createUpdateCategories"), exports);
__exportStar(require("./createUpdateCategory"), exports);
__exportStar(require("./createUpdateContactModel"), exports);
__exportStar(require("./createUpdateFolder"), exports);
__exportStar(require("./createUpdateProduct"), exports);
__exportStar(require("./createUpdateProducts"), exports);
__exportStar(require("./createWebhook"), exports);
__exportStar(require("./createWhatsAppCampaign"), exports);
__exportStar(require("./createWhatsAppCampaignRecipients"), exports);
__exportStar(require("./createWhatsAppTemplate"), exports);
__exportStar(require("./createdBatchId"), exports);
__exportStar(require("./createdProcessId"), exports);
__exportStar(require("./crmDealsIdPatchRequest"), exports);
__exportStar(require("./crmDealsLinkUnlinkIdPatchRequest"), exports);
__exportStar(require("./crmDealsPost201Response"), exports);
__exportStar(require("./crmDealsPostRequest"), exports);
__exportStar(require("./crmTasksIdPatchRequest"), exports);
__exportStar(require("./crmTasksPost201Response"), exports);
__exportStar(require("./crmTasksPostRequest"), exports);
__exportStar(require("./deal"), exports);
__exportStar(require("./dealAttributesInner"), exports);
__exportStar(require("./dealsList"), exports);
__exportStar(require("./deleteHardbounces"), exports);
__exportStar(require("./ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response"), exports);
__exportStar(require("./ecommerceAttributionMetricsGet200Response"), exports);
__exportStar(require("./ecommerceAttributionMetricsGet200ResponseTotals"), exports);
__exportStar(require("./ecommerceAttributionProductsConversionSourceConversionSourceIdGet200Response"), exports);
__exportStar(require("./ecommerceConfigDisplayCurrencyGet200Response"), exports);
__exportStar(require("./emailExportRecipients"), exports);
__exportStar(require("./errorModel"), exports);
__exportStar(require("./event"), exports);
__exportStar(require("./eventIdentifiers"), exports);
__exportStar(require("./exportWebhooksHistory"), exports);
__exportStar(require("./fileData"), exports);
__exportStar(require("./fileDownloadableLink"), exports);
__exportStar(require("./getAccount"), exports);
__exportStar(require("./getAccountActivity"), exports);
__exportStar(require("./getAccountActivityLogsInner"), exports);
__exportStar(require("./getAccountAllOfMarketingAutomation"), exports);
__exportStar(require("./getAccountAllOfPlan"), exports);
__exportStar(require("./getAccountAllOfRelay"), exports);
__exportStar(require("./getAccountAllOfRelayData"), exports);
__exportStar(require("./getAggregatedReport"), exports);
__exportStar(require("./getAllExternalFeeds"), exports);
__exportStar(require("./getAllExternalFeedsFeedsInner"), exports);
__exportStar(require("./getAttributes"), exports);
__exportStar(require("./getAttributesAttributesInner"), exports);
__exportStar(require("./getAttributesAttributesInnerEnumerationInner"), exports);
__exportStar(require("./getBlockedDomains"), exports);
__exportStar(require("./getCampaignOverview"), exports);
__exportStar(require("./getCampaignRecipients"), exports);
__exportStar(require("./getCampaignStats"), exports);
__exportStar(require("./getCategories"), exports);
__exportStar(require("./getCategoryDetails"), exports);
__exportStar(require("./getChildAccountCreationStatus"), exports);
__exportStar(require("./getChildDomain"), exports);
__exportStar(require("./getChildInfo"), exports);
__exportStar(require("./getChildInfoAllOfApiKeys"), exports);
__exportStar(require("./getChildInfoAllOfApiKeysV2"), exports);
__exportStar(require("./getChildInfoAllOfApiKeysV3"), exports);
__exportStar(require("./getChildInfoAllOfCredits"), exports);
__exportStar(require("./getChildInfoAllOfStatistics"), exports);
__exportStar(require("./getChildrenList"), exports);
__exportStar(require("./getChildrenListChildrenInner"), exports);
__exportStar(require("./getClient"), exports);
__exportStar(require("./getContactCampaignStats"), exports);
__exportStar(require("./getContactCampaignStatsClickedInner"), exports);
__exportStar(require("./getContactCampaignStatsClickedInnerLinksInner"), exports);
__exportStar(require("./getContactCampaignStatsMessagesSentInner"), exports);
__exportStar(require("./getContactCampaignStatsOpenedInner"), exports);
__exportStar(require("./getContactCampaignStatsTransacAttributesInner"), exports);
__exportStar(require("./getContactCampaignStatsUnsubscriptions"), exports);
__exportStar(require("./getContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner"), exports);
__exportStar(require("./getContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner"), exports);
__exportStar(require("./getContactDetails"), exports);
__exportStar(require("./getContacts"), exports);
__exportStar(require("./getCorporateInvitedUsersList"), exports);
__exportStar(require("./getCorporateInvitedUsersListUsersInner"), exports);
__exportStar(require("./getCorporateInvitedUsersListUsersInnerFeatureAccess"), exports);
__exportStar(require("./getCorporateInvitedUsersListUsersInnerGroups"), exports);
__exportStar(require("./getCorporateUserPermission"), exports);
__exportStar(require("./getCorporateUserPermissionFeatureAccess"), exports);
__exportStar(require("./getCorporateUserPermissionGroupsInner"), exports);
__exportStar(require("./getCouponCollection"), exports);
__exportStar(require("./getDeviceBrowserStats"), exports);
__exportStar(require("./getDomainConfigurationModel"), exports);
__exportStar(require("./getDomainsList"), exports);
__exportStar(require("./getDomainsListDomainsInner"), exports);
__exportStar(require("./getEmailCampaign"), exports);
__exportStar(require("./getEmailCampaigns"), exports);
__exportStar(require("./getEmailCampaignsCampaignsInner"), exports);
__exportStar(require("./getEmailEventReport"), exports);
__exportStar(require("./getEmailEventReportEventsInner"), exports);
__exportStar(require("./getExtendedCampaignOverview"), exports);
__exportStar(require("./getExtendedCampaignOverviewAllOfSender"), exports);
__exportStar(require("./getExtendedCampaignStats"), exports);
__exportStar(require("./getExtendedClient"), exports);
__exportStar(require("./getExtendedClientAllOfAddress"), exports);
__exportStar(require("./getExtendedContactDetails"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatistics"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatisticsClicked"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatisticsLinks"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatisticsMessagesSent"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatisticsOpened"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptions"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription"), exports);
__exportStar(require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription"), exports);
__exportStar(require("./getExtendedList"), exports);
__exportStar(require("./getExtendedListAllOfCampaignStats"), exports);
__exportStar(require("./getExternalFeedByUUID"), exports);
__exportStar(require("./getExternalFeedByUUIDHeadersInner"), exports);
__exportStar(require("./getFolder"), exports);
__exportStar(require("./getFolderLists"), exports);
__exportStar(require("./getFolders"), exports);
__exportStar(require("./getInboundEmailEvents"), exports);
__exportStar(require("./getInboundEmailEventsByUuid"), exports);
__exportStar(require("./getInboundEmailEventsByUuidAttachmentsInner"), exports);
__exportStar(require("./getInboundEmailEventsByUuidLogsInner"), exports);
__exportStar(require("./getInboundEmailEventsEventsInner"), exports);
__exportStar(require("./getInvitedUsersList"), exports);
__exportStar(require("./getInvitedUsersListUsersInner"), exports);
__exportStar(require("./getInvitedUsersListUsersInnerFeatureAccess"), exports);
__exportStar(require("./getIp"), exports);
__exportStar(require("./getIpFromSender"), exports);
__exportStar(require("./getIps"), exports);
__exportStar(require("./getIpsFromSender"), exports);
__exportStar(require("./getList"), exports);
__exportStar(require("./getLists"), exports);
__exportStar(require("./getListsListsInner"), exports);
__exportStar(require("./getOrders"), exports);
__exportStar(require("./getOrdersOrdersInner"), exports);
__exportStar(require("./getPaymentRequest"), exports);
__exportStar(require("./getProcess"), exports);
__exportStar(require("./getProcesses"), exports);
__exportStar(require("./getProductDetails"), exports);
__exportStar(require("./getProducts"), exports);
__exportStar(require("./getReports"), exports);
__exportStar(require("./getReportsReportsInner"), exports);
__exportStar(require("./getScheduledEmailByBatchId"), exports);
__exportStar(require("./getScheduledEmailByBatchIdBatchesInner"), exports);
__exportStar(require("./getScheduledEmailByMessageId"), exports);
__exportStar(require("./getSegments"), exports);
__exportStar(require("./getSegmentsSegments"), exports);
__exportStar(require("./getSendersList"), exports);
__exportStar(require("./getSendersListSendersInner"), exports);
__exportStar(require("./getSendersListSendersInnerIpsInner"), exports);
__exportStar(require("./getSharedTemplateUrl"), exports);
__exportStar(require("./getSmsCampaign"), exports);
__exportStar(require("./getSmsCampaignOverview"), exports);
__exportStar(require("./getSmsCampaignStats"), exports);
__exportStar(require("./getSmsCampaigns"), exports);
__exportStar(require("./getSmsCampaignsCampaignsInner"), exports);
__exportStar(require("./getSmsEventReport"), exports);
__exportStar(require("./getSmsEventReportEventsInner"), exports);
__exportStar(require("./getSmtpTemplateOverview"), exports);
__exportStar(require("./getSmtpTemplateOverviewSender"), exports);
__exportStar(require("./getSmtpTemplates"), exports);
__exportStar(require("./getSsoToken"), exports);
__exportStar(require("./getStatsByDevice"), exports);
__exportStar(require("./getSubAccountGroups200ResponseInner"), exports);
__exportStar(require("./getTransacAggregatedSmsReport"), exports);
__exportStar(require("./getTransacBlockedContacts"), exports);
__exportStar(require("./getTransacBlockedContactsContactsInner"), exports);
__exportStar(require("./getTransacBlockedContactsContactsInnerReason"), exports);
__exportStar(require("./getTransacEmailContent"), exports);
__exportStar(require("./getTransacEmailContentEventsInner"), exports);
__exportStar(require("./getTransacEmailsList"), exports);
__exportStar(require("./getTransacEmailsListTransactionalEmailsInner"), exports);
__exportStar(require("./getTransacSmsReport"), exports);
__exportStar(require("./getTransacSmsReportReportsInner"), exports);
__exportStar(require("./getUserPermission"), exports);
__exportStar(require("./getUserPermissionPrivilegesInner"), exports);
__exportStar(require("./getWATemplates"), exports);
__exportStar(require("./getWATemplatesTemplatesInner"), exports);
__exportStar(require("./getWebhook"), exports);
__exportStar(require("./getWebhookAuth"), exports);
__exportStar(require("./getWebhookHeadersInner"), exports);
__exportStar(require("./getWebhooks"), exports);
__exportStar(require("./getWhatsAppConfig"), exports);
__exportStar(require("./getWhatsappCampaignOverview"), exports);
__exportStar(require("./getWhatsappCampaigns"), exports);
__exportStar(require("./getWhatsappCampaignsCampaignsInner"), exports);
__exportStar(require("./getWhatsappEventReport"), exports);
__exportStar(require("./getWhatsappEventReportEventsInner"), exports);
__exportStar(require("./inviteAdminUser"), exports);
__exportStar(require("./inviteAdminUserPrivilegesInner"), exports);
__exportStar(require("./inviteuser"), exports);
__exportStar(require("./inviteuserPrivilegesInner"), exports);
__exportStar(require("./manageIp"), exports);
__exportStar(require("./masterDetailsResponse"), exports);
__exportStar(require("./masterDetailsResponseBillingInfo"), exports);
__exportStar(require("./masterDetailsResponseBillingInfoAddress"), exports);
__exportStar(require("./masterDetailsResponseBillingInfoName"), exports);
__exportStar(require("./masterDetailsResponsePlanInfo"), exports);
__exportStar(require("./masterDetailsResponsePlanInfoFeaturesInner"), exports);
__exportStar(require("./note"), exports);
__exportStar(require("./noteData"), exports);
__exportStar(require("./noteId"), exports);
__exportStar(require("./notification"), exports);
__exportStar(require("./order"), exports);
__exportStar(require("./orderBatch"), exports);
__exportStar(require("./orderBilling"), exports);
__exportStar(require("./orderProductsInner"), exports);
__exportStar(require("./otp"), exports);
__exportStar(require("./pipeline"), exports);
__exportStar(require("./pipelineStage"), exports);
__exportStar(require("./postContactInfo"), exports);
__exportStar(require("./postContactInfoContacts"), exports);
__exportStar(require("./postSendFailed"), exports);
__exportStar(require("./postSendSmsTestFailed"), exports);
__exportStar(require("./putRevokeUserPermission"), exports);
__exportStar(require("./putresendcancelinvitation"), exports);
__exportStar(require("./remainingCreditModel"), exports);
__exportStar(require("./remainingCreditModelChild"), exports);
__exportStar(require("./remainingCreditModelReseller"), exports);
__exportStar(require("./removeContactFromList"), exports);
__exportStar(require("./removeCredits"), exports);
__exportStar(require("./requestContactExport"), exports);
__exportStar(require("./requestContactExportCustomContactFilter"), exports);
__exportStar(require("./requestContactImport"), exports);
__exportStar(require("./requestContactImportJsonBodyInner"), exports);
__exportStar(require("./requestContactImportNewList"), exports);
__exportStar(require("./requestSmsRecipientExport"), exports);
__exportStar(require("./scheduleSmtpEmail"), exports);
__exportStar(require("./sendReport"), exports);
__exportStar(require("./sendReportEmail"), exports);
__exportStar(require("./sendSms"), exports);
__exportStar(require("./sendSmtpEmail"), exports);
__exportStar(require("./sendSmtpEmailAttachmentInner"), exports);
__exportStar(require("./sendSmtpEmailBccInner"), exports);
__exportStar(require("./sendSmtpEmailCcInner"), exports);
__exportStar(require("./sendSmtpEmailMessageVersionsInner"), exports);
__exportStar(require("./sendSmtpEmailMessageVersionsInnerReplyTo"), exports);
__exportStar(require("./sendSmtpEmailMessageVersionsInnerToInner"), exports);
__exportStar(require("./sendSmtpEmailReplyTo"), exports);
__exportStar(require("./sendSmtpEmailSender"), exports);
__exportStar(require("./sendSmtpEmailToInner"), exports);
__exportStar(require("./sendTestEmail"), exports);
__exportStar(require("./sendTestSms"), exports);
__exportStar(require("./sendTransacSms"), exports);
__exportStar(require("./sendWhatsappMessage"), exports);
__exportStar(require("./sendWhatsappMessage201Response"), exports);
__exportStar(require("./ssoTokenRequest"), exports);
__exportStar(require("./ssoTokenRequestCorporate"), exports);
__exportStar(require("./subAccountAppsToggleRequest"), exports);
__exportStar(require("./subAccountDetailsResponse"), exports);
__exportStar(require("./subAccountDetailsResponseGroupsInner"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfo"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoCredits"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoCreditsEmails"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoCreditsSms"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoCreditsWpSubscribers"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoFeatures"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoFeaturesInbox"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoFeaturesLandingPage"), exports);
__exportStar(require("./subAccountDetailsResponsePlanInfoFeaturesUsers"), exports);
__exportStar(require("./subAccountUpdatePlanRequest"), exports);
__exportStar(require("./subAccountUpdatePlanRequestCredits"), exports);
__exportStar(require("./subAccountUpdatePlanRequestFeatures"), exports);
__exportStar(require("./subAccountsResponse"), exports);
__exportStar(require("./subAccountsResponseSubAccountsInner"), exports);
__exportStar(require("./subAccountsResponseSubAccountsInnerGroupsInner"), exports);
__exportStar(require("./task"), exports);
__exportStar(require("./taskList"), exports);
__exportStar(require("./taskReminder"), exports);
__exportStar(require("./taskTypes"), exports);
__exportStar(require("./updateAttribute"), exports);
__exportStar(require("./updateAttributeEnumerationInner"), exports);
__exportStar(require("./updateBatchContacts"), exports);
__exportStar(require("./updateBatchContactsContactsInner"), exports);
__exportStar(require("./updateBatchContactsModel"), exports);
__exportStar(require("./updateCampaignStatus"), exports);
__exportStar(require("./updateChild"), exports);
__exportStar(require("./updateChildAccountStatus"), exports);
__exportStar(require("./updateChildDomain"), exports);
__exportStar(require("./updateContact"), exports);
__exportStar(require("./updateCouponCollection200Response"), exports);
__exportStar(require("./updateCouponCollectionRequest"), exports);
__exportStar(require("./updateEmailCampaign"), exports);
__exportStar(require("./updateEmailCampaignRecipients"), exports);
__exportStar(require("./updateEmailCampaignSender"), exports);
__exportStar(require("./updateExternalFeed"), exports);
__exportStar(require("./updateList"), exports);
__exportStar(require("./updateSender"), exports);
__exportStar(require("./updateSmsCampaign"), exports);
__exportStar(require("./updateSmtpTemplate"), exports);
__exportStar(require("./updateSmtpTemplateSender"), exports);
__exportStar(require("./updateWebhook"), exports);
__exportStar(require("./updateWhatsAppCampaign"), exports);
__exportStar(require("./uploadImageModel"), exports);
__exportStar(require("./uploadImageToGallery"), exports);
__exportStar(require("./variablesItems"), exports);
__exportStar(require("./whatsappCampStats"), exports);
__exportStar(require("./whatsappCampTemplate"), exports);
const abTestCampaignResult_1 = require("./abTestCampaignResult");
const abTestCampaignResultClickedLinks_1 = require("./abTestCampaignResultClickedLinks");
const abTestCampaignResultStatistics_1 = require("./abTestCampaignResultStatistics");
const abTestVersionClicksInner_1 = require("./abTestVersionClicksInner");
const abTestVersionStats_1 = require("./abTestVersionStats");
const addChildDomain_1 = require("./addChildDomain");
const addContactToList_1 = require("./addContactToList");
const addCredits_1 = require("./addCredits");
const authenticateDomainModel_1 = require("./authenticateDomainModel");
const blockDomain_1 = require("./blockDomain");
const cart_1 = require("./cart");
const companiesIdPatchRequest_1 = require("./companiesIdPatchRequest");
const companiesLinkUnlinkIdPatchRequest_1 = require("./companiesLinkUnlinkIdPatchRequest");
const companiesList_1 = require("./companiesList");
const companiesPost200Response_1 = require("./companiesPost200Response");
const companiesPostRequest_1 = require("./companiesPostRequest");
const company_1 = require("./company");
const companyAttributesInner_1 = require("./companyAttributesInner");
const componentItems_1 = require("./componentItems");
const configuration_1 = require("./configuration");
const conversationsAgentOnlinePingPostRequest_1 = require("./conversationsAgentOnlinePingPostRequest");
const conversationsMessage_1 = require("./conversationsMessage");
const conversationsMessageFile_1 = require("./conversationsMessageFile");
const conversationsMessageFileImageInfo_1 = require("./conversationsMessageFileImageInfo");
const conversationsMessagesIdPutRequest_1 = require("./conversationsMessagesIdPutRequest");
const conversationsMessagesPostRequest_1 = require("./conversationsMessagesPostRequest");
const conversationsPushedMessagesIdPutRequest_1 = require("./conversationsPushedMessagesIdPutRequest");
const conversationsPushedMessagesPostRequest_1 = require("./conversationsPushedMessagesPostRequest");
const conversionSourceMetrics_1 = require("./conversionSourceMetrics");
const conversionSourceProduct_1 = require("./conversionSourceProduct");
const corporateGroupDetailsResponse_1 = require("./corporateGroupDetailsResponse");
const corporateGroupDetailsResponseGroup_1 = require("./corporateGroupDetailsResponseGroup");
const corporateGroupDetailsResponseSubAccountsInner_1 = require("./corporateGroupDetailsResponseSubAccountsInner");
const corporateGroupDetailsResponseUsersInner_1 = require("./corporateGroupDetailsResponseUsersInner");
const corporateGroupPost201Response_1 = require("./corporateGroupPost201Response");
const corporateGroupPostRequest_1 = require("./corporateGroupPostRequest");
const corporateGroupUnlinkGroupIdSubAccountsPutRequest_1 = require("./corporateGroupUnlinkGroupIdSubAccountsPutRequest");
const corporateSubAccountIpAssociatePostRequest_1 = require("./corporateSubAccountIpAssociatePostRequest");
const corporateSubAccountIpDissociatePutRequest_1 = require("./corporateSubAccountIpDissociatePutRequest");
const corporateUserInvitationActionEmailPut200Response_1 = require("./corporateUserInvitationActionEmailPut200Response");
const createApiKeyRequest_1 = require("./createApiKeyRequest");
const createApiKeyResponse_1 = require("./createApiKeyResponse");
const createAttribute_1 = require("./createAttribute");
const createAttributeEnumerationInner_1 = require("./createAttributeEnumerationInner");
const createCategoryModel_1 = require("./createCategoryModel");
const createChild_1 = require("./createChild");
const createContact_1 = require("./createContact");
const createCouponCollection201Response_1 = require("./createCouponCollection201Response");
const createCouponCollectionRequest_1 = require("./createCouponCollectionRequest");
const createCouponsRequest_1 = require("./createCouponsRequest");
const createDoiContact_1 = require("./createDoiContact");
const createDomain_1 = require("./createDomain");
const createDomainModel_1 = require("./createDomainModel");
const createDomainModelDnsRecords_1 = require("./createDomainModelDnsRecords");
const createDomainModelDnsRecordsDkimRecord_1 = require("./createDomainModelDnsRecordsDkimRecord");
const createEmailCampaign_1 = require("./createEmailCampaign");
const createEmailCampaignRecipients_1 = require("./createEmailCampaignRecipients");
const createEmailCampaignSender_1 = require("./createEmailCampaignSender");
const createExternalFeed_1 = require("./createExternalFeed");
const createExternalFeed201Response_1 = require("./createExternalFeed201Response");
const createList_1 = require("./createList");
const createModel_1 = require("./createModel");
const createPaymentRequest_1 = require("./createPaymentRequest");
const createPaymentResponse_1 = require("./createPaymentResponse");
const createProductModel_1 = require("./createProductModel");
const createReseller_1 = require("./createReseller");
const createSender_1 = require("./createSender");
const createSenderIpsInner_1 = require("./createSenderIpsInner");
const createSenderModel_1 = require("./createSenderModel");
const createSmsCampaign_1 = require("./createSmsCampaign");
const createSmsCampaignRecipients_1 = require("./createSmsCampaignRecipients");
const createSmtpEmail_1 = require("./createSmtpEmail");
const createSmtpTemplate_1 = require("./createSmtpTemplate");
const createSmtpTemplateSender_1 = require("./createSmtpTemplateSender");
const createSubAccount_1 = require("./createSubAccount");
const createSubAccountResponse_1 = require("./createSubAccountResponse");
const createUpdateBatchCategory_1 = require("./createUpdateBatchCategory");
const createUpdateBatchCategoryModel_1 = require("./createUpdateBatchCategoryModel");
const createUpdateBatchProducts_1 = require("./createUpdateBatchProducts");
const createUpdateBatchProductsModel_1 = require("./createUpdateBatchProductsModel");
const createUpdateCategories_1 = require("./createUpdateCategories");
const createUpdateCategory_1 = require("./createUpdateCategory");
const createUpdateContactModel_1 = require("./createUpdateContactModel");
const createUpdateFolder_1 = require("./createUpdateFolder");
const createUpdateProduct_1 = require("./createUpdateProduct");
const createUpdateProducts_1 = require("./createUpdateProducts");
const createWebhook_1 = require("./createWebhook");
const createWhatsAppCampaign_1 = require("./createWhatsAppCampaign");
const createWhatsAppCampaignRecipients_1 = require("./createWhatsAppCampaignRecipients");
const createWhatsAppTemplate_1 = require("./createWhatsAppTemplate");
const createdBatchId_1 = require("./createdBatchId");
const createdProcessId_1 = require("./createdProcessId");
const crmDealsIdPatchRequest_1 = require("./crmDealsIdPatchRequest");
const crmDealsLinkUnlinkIdPatchRequest_1 = require("./crmDealsLinkUnlinkIdPatchRequest");
const crmDealsPost201Response_1 = require("./crmDealsPost201Response");
const crmDealsPostRequest_1 = require("./crmDealsPostRequest");
const crmTasksIdPatchRequest_1 = require("./crmTasksIdPatchRequest");
const crmTasksPost201Response_1 = require("./crmTasksPost201Response");
const crmTasksPostRequest_1 = require("./crmTasksPostRequest");
const deal_1 = require("./deal");
const dealAttributesInner_1 = require("./dealAttributesInner");
const dealsList_1 = require("./dealsList");
const deleteHardbounces_1 = require("./deleteHardbounces");
const ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response_1 = require("./ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response");
const ecommerceAttributionMetricsGet200Response_1 = require("./ecommerceAttributionMetricsGet200Response");
const ecommerceAttributionMetricsGet200ResponseTotals_1 = require("./ecommerceAttributionMetricsGet200ResponseTotals");
const ecommerceAttributionProductsConversionSourceConversionSourceIdGet200Response_1 = require("./ecommerceAttributionProductsConversionSourceConversionSourceIdGet200Response");
const ecommerceConfigDisplayCurrencyGet200Response_1 = require("./ecommerceConfigDisplayCurrencyGet200Response");
const emailExportRecipients_1 = require("./emailExportRecipients");
const errorModel_1 = require("./errorModel");
const event_1 = require("./event");
const eventIdentifiers_1 = require("./eventIdentifiers");
const exportWebhooksHistory_1 = require("./exportWebhooksHistory");
const fileData_1 = require("./fileData");
const fileDownloadableLink_1 = require("./fileDownloadableLink");
const getAccount_1 = require("./getAccount");
const getAccountActivity_1 = require("./getAccountActivity");
const getAccountActivityLogsInner_1 = require("./getAccountActivityLogsInner");
const getAccountAllOfMarketingAutomation_1 = require("./getAccountAllOfMarketingAutomation");
const getAccountAllOfPlan_1 = require("./getAccountAllOfPlan");
const getAccountAllOfRelay_1 = require("./getAccountAllOfRelay");
const getAccountAllOfRelayData_1 = require("./getAccountAllOfRelayData");
const getAggregatedReport_1 = require("./getAggregatedReport");
const getAllExternalFeeds_1 = require("./getAllExternalFeeds");
const getAllExternalFeedsFeedsInner_1 = require("./getAllExternalFeedsFeedsInner");
const getAttributes_1 = require("./getAttributes");
const getAttributesAttributesInner_1 = require("./getAttributesAttributesInner");
const getAttributesAttributesInnerEnumerationInner_1 = require("./getAttributesAttributesInnerEnumerationInner");
const getBlockedDomains_1 = require("./getBlockedDomains");
const getCampaignOverview_1 = require("./getCampaignOverview");
const getCampaignRecipients_1 = require("./getCampaignRecipients");
const getCampaignStats_1 = require("./getCampaignStats");
const getCategories_1 = require("./getCategories");
const getCategoryDetails_1 = require("./getCategoryDetails");
const getChildAccountCreationStatus_1 = require("./getChildAccountCreationStatus");
const getChildDomain_1 = require("./getChildDomain");
const getChildInfo_1 = require("./getChildInfo");
const getChildInfoAllOfApiKeys_1 = require("./getChildInfoAllOfApiKeys");
const getChildInfoAllOfApiKeysV2_1 = require("./getChildInfoAllOfApiKeysV2");
const getChildInfoAllOfApiKeysV3_1 = require("./getChildInfoAllOfApiKeysV3");
const getChildInfoAllOfCredits_1 = require("./getChildInfoAllOfCredits");
const getChildInfoAllOfStatistics_1 = require("./getChildInfoAllOfStatistics");
const getChildrenList_1 = require("./getChildrenList");
const getChildrenListChildrenInner_1 = require("./getChildrenListChildrenInner");
const getClient_1 = require("./getClient");
const getContactCampaignStats_1 = require("./getContactCampaignStats");
const getContactCampaignStatsClickedInner_1 = require("./getContactCampaignStatsClickedInner");
const getContactCampaignStatsClickedInnerLinksInner_1 = require("./getContactCampaignStatsClickedInnerLinksInner");
const getContactCampaignStatsMessagesSentInner_1 = require("./getContactCampaignStatsMessagesSentInner");
const getContactCampaignStatsOpenedInner_1 = require("./getContactCampaignStatsOpenedInner");
const getContactCampaignStatsTransacAttributesInner_1 = require("./getContactCampaignStatsTransacAttributesInner");
const getContactCampaignStatsUnsubscriptions_1 = require("./getContactCampaignStatsUnsubscriptions");
const getContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner_1 = require("./getContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner");
const getContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner_1 = require("./getContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner");
const getContactDetails_1 = require("./getContactDetails");
const getContacts_1 = require("./getContacts");
const getCorporateInvitedUsersList_1 = require("./getCorporateInvitedUsersList");
const getCorporateInvitedUsersListUsersInner_1 = require("./getCorporateInvitedUsersListUsersInner");
const getCorporateInvitedUsersListUsersInnerFeatureAccess_1 = require("./getCorporateInvitedUsersListUsersInnerFeatureAccess");
const getCorporateInvitedUsersListUsersInnerGroups_1 = require("./getCorporateInvitedUsersListUsersInnerGroups");
const getCorporateUserPermission_1 = require("./getCorporateUserPermission");
const getCorporateUserPermissionFeatureAccess_1 = require("./getCorporateUserPermissionFeatureAccess");
const getCorporateUserPermissionGroupsInner_1 = require("./getCorporateUserPermissionGroupsInner");
const getCouponCollection_1 = require("./getCouponCollection");
const getDeviceBrowserStats_1 = require("./getDeviceBrowserStats");
const getDomainConfigurationModel_1 = require("./getDomainConfigurationModel");
const getDomainsList_1 = require("./getDomainsList");
const getDomainsListDomainsInner_1 = require("./getDomainsListDomainsInner");
const getEmailCampaign_1 = require("./getEmailCampaign");
const getEmailCampaigns_1 = require("./getEmailCampaigns");
const getEmailCampaignsCampaignsInner_1 = require("./getEmailCampaignsCampaignsInner");
const getEmailEventReport_1 = require("./getEmailEventReport");
const getEmailEventReportEventsInner_1 = require("./getEmailEventReportEventsInner");
const getExtendedCampaignOverview_1 = require("./getExtendedCampaignOverview");
const getExtendedCampaignOverviewAllOfSender_1 = require("./getExtendedCampaignOverviewAllOfSender");
const getExtendedCampaignStats_1 = require("./getExtendedCampaignStats");
const getExtendedClient_1 = require("./getExtendedClient");
const getExtendedClientAllOfAddress_1 = require("./getExtendedClientAllOfAddress");
const getExtendedContactDetails_1 = require("./getExtendedContactDetails");
const getExtendedContactDetailsAllOfStatistics_1 = require("./getExtendedContactDetailsAllOfStatistics");
const getExtendedContactDetailsAllOfStatisticsClicked_1 = require("./getExtendedContactDetailsAllOfStatisticsClicked");
const getExtendedContactDetailsAllOfStatisticsLinks_1 = require("./getExtendedContactDetailsAllOfStatisticsLinks");
const getExtendedContactDetailsAllOfStatisticsMessagesSent_1 = require("./getExtendedContactDetailsAllOfStatisticsMessagesSent");
const getExtendedContactDetailsAllOfStatisticsOpened_1 = require("./getExtendedContactDetailsAllOfStatisticsOpened");
const getExtendedContactDetailsAllOfStatisticsUnsubscriptions_1 = require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptions");
const getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription_1 = require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription");
const getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription_1 = require("./getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription");
const getExtendedList_1 = require("./getExtendedList");
const getExtendedListAllOfCampaignStats_1 = require("./getExtendedListAllOfCampaignStats");
const getExternalFeedByUUID_1 = require("./getExternalFeedByUUID");
const getExternalFeedByUUIDHeadersInner_1 = require("./getExternalFeedByUUIDHeadersInner");
const getFolder_1 = require("./getFolder");
const getFolderLists_1 = require("./getFolderLists");
const getFolders_1 = require("./getFolders");
const getInboundEmailEvents_1 = require("./getInboundEmailEvents");
const getInboundEmailEventsByUuid_1 = require("./getInboundEmailEventsByUuid");
const getInboundEmailEventsByUuidAttachmentsInner_1 = require("./getInboundEmailEventsByUuidAttachmentsInner");
const getInboundEmailEventsByUuidLogsInner_1 = require("./getInboundEmailEventsByUuidLogsInner");
const getInboundEmailEventsEventsInner_1 = require("./getInboundEmailEventsEventsInner");
const getInvitedUsersList_1 = require("./getInvitedUsersList");
const getInvitedUsersListUsersInner_1 = require("./getInvitedUsersListUsersInner");
const getInvitedUsersListUsersInnerFeatureAccess_1 = require("./getInvitedUsersListUsersInnerFeatureAccess");
const getIp_1 = require("./getIp");
const getIpFromSender_1 = require("./getIpFromSender");
const getIps_1 = require("./getIps");
const getIpsFromSender_1 = require("./getIpsFromSender");
const getList_1 = require("./getList");
const getLists_1 = require("./getLists");
const getListsListsInner_1 = require("./getListsListsInner");
const getOrders_1 = require("./getOrders");
const getOrdersOrdersInner_1 = require("./getOrdersOrdersInner");
const getPaymentRequest_1 = require("./getPaymentRequest");
const getProcess_1 = require("./getProcess");
const getProcesses_1 = require("./getProcesses");
const getProductDetails_1 = require("./getProductDetails");
const getProducts_1 = require("./getProducts");
const getReports_1 = require("./getReports");
const getReportsReportsInner_1 = require("./getReportsReportsInner");
const getScheduledEmailByBatchId_1 = require("./getScheduledEmailByBatchId");
const getScheduledEmailByBatchIdBatchesInner_1 = require("./getScheduledEmailByBatchIdBatchesInner");
const getScheduledEmailByMessageId_1 = require("./getScheduledEmailByMessageId");
const getSegments_1 = require("./getSegments");
const getSegmentsSegments_1 = require("./getSegmentsSegments");
const getSendersList_1 = require("./getSendersList");
const getSendersListSendersInner_1 = require("./getSendersListSendersInner");
const getSendersListSendersInnerIpsInner_1 = require("./getSendersListSendersInnerIpsInner");
const getSharedTemplateUrl_1 = require("./getSharedTemplateUrl");
const getSmsCampaign_1 = require("./getSmsCampaign");
const getSmsCampaignOverview_1 = require("./getSmsCampaignOverview");
const getSmsCampaignStats_1 = require("./getSmsCampaignStats");
const getSmsCampaigns_1 = require("./getSmsCampaigns");
const getSmsCampaignsCampaignsInner_1 = require("./getSmsCampaignsCampaignsInner");
const getSmsEventReport_1 = require("./getSmsEventReport");
const getSmsEventReportEventsInner_1 = require("./getSmsEventReportEventsInner");
const getSmtpTemplateOverview_1 = require("./getSmtpTemplateOverview");
const getSmtpTemplateOverviewSender_1 = require("./getSmtpTemplateOverviewSender");
const getSmtpTemplates_1 = require("./getSmtpTemplates");
const getSsoToken_1 = require("./getSsoToken");
const getStatsByDevice_1 = require("./getStatsByDevice");
const getSubAccountGroups200ResponseInner_1 = require("./getSubAccountGroups200ResponseInner");
const getTransacAggregatedSmsReport_1 = require("./getTransacAggregatedSmsReport");
const getTransacBlockedContacts_1 = require("./getTransacBlockedContacts");
const getTransacBlockedContactsContactsInner_1 = require("./getTransacBlockedContactsContactsInner");
const getTransacBlockedContactsContactsInnerReason_1 = require("./getTransacBlockedContactsContactsInnerReason");
const getTransacEmailContent_1 = require("./getTransacEmailContent");
const getTransacEmailContentEventsInner_1 = require("./getTransacEmailContentEventsInner");
const getTransacEmailsList_1 = require("./getTransacEmailsList");
const getTransacEmailsListTransactionalEmailsInner_1 = require("./getTransacEmailsListTransactionalEmailsInner");
const getTransacSmsReport_1 = require("./getTransacSmsReport");
const getTransacSmsReportReportsInner_1 = require("./getTransacSmsReportReportsInner");
const getUserPermission_1 = require("./getUserPermission");
const getUserPermissionPrivilegesInner_1 = require("./getUserPermissionPrivilegesInner");
const getWATemplates_1 = require("./getWATemplates");
const getWATemplatesTemplatesInner_1 = require("./getWATemplatesTemplatesInner");
const getWebhook_1 = require("./getWebhook");
const getWebhookAuth_1 = require("./getWebhookAuth");
const getWebhookHeadersInner_1 = require("./getWebhookHeadersInner");
const getWebhooks_1 = require("./getWebhooks");
const getWhatsAppConfig_1 = require("./getWhatsAppConfig");
const getWhatsappCampaignOverview_1 = require("./getWhatsappCampaignOverview");
const getWhatsappCampaigns_1 = require("./getWhatsappCampaigns");
const getWhatsappCampaignsCampaignsInner_1 = require("./getWhatsappCampaignsCampaignsInner");
const getWhatsappEventReport_1 = require("./getWhatsappEventReport");
const getWhatsappEventReportEventsInner_1 = require("./getWhatsappEventReportEventsInner");
const inviteAdminUser_1 = require("./inviteAdminUser");
const inviteAdminUserPrivilegesInner_1 = require("./inviteAdminUserPrivilegesInner");
const inviteuser_1 = require("./inviteuser");
const inviteuserPrivilegesInner_1 = require("./inviteuserPrivilegesInner");
const manageIp_1 = require("./manageIp");
const masterDetailsResponse_1 = require("./masterDetailsResponse");
const masterDetailsResponseBillingInfo_1 = require("./masterDetailsResponseBillingInfo");
const masterDetailsResponseBillingInfoAddress_1 = require("./masterDetailsResponseBillingInfoAddress");
const masterDetailsResponseBillingInfoName_1 = require("./masterDetailsResponseBillingInfoName");
const masterDetailsResponsePlanInfo_1 = require("./masterDetailsResponsePlanInfo");
const masterDetailsResponsePlanInfoFeaturesInner_1 = require("./masterDetailsResponsePlanInfoFeaturesInner");
const note_1 = require("./note");
const noteData_1 = require("./noteData");
const noteId_1 = require("./noteId");
const notification_1 = require("./notification");
const order_1 = require("./order");
const orderBatch_1 = require("./orderBatch");
const orderBilling_1 = require("./orderBilling");
const orderProductsInner_1 = require("./orderProductsInner");
const otp_1 = require("./otp");
const pipeline_1 = require("./pipeline");
const pipelineStage_1 = require("./pipelineStage");
const postContactInfo_1 = require("./postContactInfo");
const postContactInfoContacts_1 = require("./postContactInfoContacts");
const postSendFailed_1 = require("./postSendFailed");
const postSendSmsTestFailed_1 = require("./postSendSmsTestFailed");
const putRevokeUserPermission_1 = require("./putRevokeUserPermission");
const putresendcancelinvitation_1 = require("./putresendcancelinvitation");
const remainingCreditModel_1 = require("./remainingCreditModel");
const remainingCreditModelChild_1 = require("./remainingCreditModelChild");
const remainingCreditModelReseller_1 = require("./remainingCreditModelReseller");
const removeContactFromList_1 = require("./removeContactFromList");
const removeCredits_1 = require("./removeCredits");
const requestContactExport_1 = require("./requestContactExport");
const requestContactExportCustomContactFilter_1 = require("./requestContactExportCustomContactFilter");
const requestContactImport_1 = require("./requestContactImport");
const requestContactImportJsonBodyInner_1 = require("./requestContactImportJsonBodyInner");
const requestContactImportNewList_1 = require("./requestContactImportNewList");
const requestSmsRecipientExport_1 = require("./requestSmsRecipientExport");
const scheduleSmtpEmail_1 = require("./scheduleSmtpEmail");
const sendReport_1 = require("./sendReport");
const sendReportEmail_1 = require("./sendReportEmail");
const sendSms_1 = require("./sendSms");
const sendSmtpEmail_1 = require("./sendSmtpEmail");
const sendSmtpEmailAttachmentInner_1 = require("./sendSmtpEmailAttachmentInner");
const sendSmtpEmailBccInner_1 = require("./sendSmtpEmailBccInner");
const sendSmtpEmailCcInner_1 = require("./sendSmtpEmailCcInner");
const sendSmtpEmailMessageVersionsInner_1 = require("./sendSmtpEmailMessageVersionsInner");
const sendSmtpEmailMessageVersionsInnerReplyTo_1 = require("./sendSmtpEmailMessageVersionsInnerReplyTo");
const sendSmtpEmailMessageVersionsInnerToInner_1 = require("./sendSmtpEmailMessageVersionsInnerToInner");
const sendSmtpEmailReplyTo_1 = require("./sendSmtpEmailReplyTo");
const sendSmtpEmailSender_1 = require("./sendSmtpEmailSender");
const sendSmtpEmailToInner_1 = require("./sendSmtpEmailToInner");
const sendTestEmail_1 = require("./sendTestEmail");
const sendTestSms_1 = require("./sendTestSms");
const sendTransacSms_1 = require("./sendTransacSms");
const sendWhatsappMessage_1 = require("./sendWhatsappMessage");
const sendWhatsappMessage201Response_1 = require("./sendWhatsappMessage201Response");
const ssoTokenRequest_1 = require("./ssoTokenRequest");
const ssoTokenRequestCorporate_1 = require("./ssoTokenRequestCorporate");
const subAccountAppsToggleRequest_1 = require("./subAccountAppsToggleRequest");
const subAccountDetailsResponse_1 = require("./subAccountDetailsResponse");
const subAccountDetailsResponseGroupsInner_1 = require("./subAccountDetailsResponseGroupsInner");
const subAccountDetailsResponsePlanInfo_1 = require("./subAccountDetailsResponsePlanInfo");
const subAccountDetailsResponsePlanInfoCredits_1 = require("./subAccountDetailsResponsePlanInfoCredits");
const subAccountDetailsResponsePlanInfoCreditsEmails_1 = require("./subAccountDetailsResponsePlanInfoCreditsEmails");
const subAccountDetailsResponsePlanInfoCreditsSms_1 = require("./subAccountDetailsResponsePlanInfoCreditsSms");
const subAccountDetailsResponsePlanInfoCreditsWpSubscribers_1 = require("./subAccountDetailsResponsePlanInfoCreditsWpSubscribers");
const subAccountDetailsResponsePlanInfoFeatures_1 = require("./subAccountDetailsResponsePlanInfoFeatures");
const subAccountDetailsResponsePlanInfoFeaturesInbox_1 = require("./subAccountDetailsResponsePlanInfoFeaturesInbox");
const subAccountDetailsResponsePlanInfoFeaturesLandingPage_1 = require("./subAccountDetailsResponsePlanInfoFeaturesLandingPage");
const subAccountDetailsResponsePlanInfoFeaturesUsers_1 = require("./subAccountDetailsResponsePlanInfoFeaturesUsers");
const subAccountUpdatePlanRequest_1 = require("./subAccountUpdatePlanRequest");
const subAccountUpdatePlanRequestCredits_1 = require("./subAccountUpdatePlanRequestCredits");
const subAccountUpdatePlanRequestFeatures_1 = require("./subAccountUpdatePlanRequestFeatures");
const subAccountsResponse_1 = require("./subAccountsResponse");
const subAccountsResponseSubAccountsInner_1 = require("./subAccountsResponseSubAccountsInner");
const subAccountsResponseSubAccountsInnerGroupsInner_1 = require("./subAccountsResponseSubAccountsInnerGroupsInner");
const task_1 = require("./task");
const taskList_1 = require("./taskList");
const taskReminder_1 = require("./taskReminder");
const taskTypes_1 = require("./taskTypes");
const updateAttribute_1 = require("./updateAttribute");
const updateAttributeEnumerationInner_1 = require("./updateAttributeEnumerationInner");
const updateBatchContacts_1 = require("./updateBatchContacts");
const updateBatchContactsContactsInner_1 = require("./updateBatchContactsContactsInner");
const updateBatchContactsModel_1 = require("./updateBatchContactsModel");
const updateCampaignStatus_1 = require("./updateCampaignStatus");
const updateChild_1 = require("./updateChild");
const updateChildAccountStatus_1 = require("./updateChildAccountStatus");
const updateChildDomain_1 = require("./updateChildDomain");
const updateContact_1 = require("./updateContact");
const updateCouponCollection200Response_1 = require("./updateCouponCollection200Response");
const updateCouponCollectionRequest_1 = require("./updateCouponCollectionRequest");
const updateEmailCampaign_1 = require("./updateEmailCampaign");
const updateEmailCampaignRecipients_1 = require("./updateEmailCampaignRecipients");
const updateEmailCampaignSender_1 = require("./updateEmailCampaignSender");
const updateExternalFeed_1 = require("./updateExternalFeed");
const updateList_1 = require("./updateList");
const updateSender_1 = require("./updateSender");
const updateSmsCampaign_1 = require("./updateSmsCampaign");
const updateSmtpTemplate_1 = require("./updateSmtpTemplate");
const updateSmtpTemplateSender_1 = require("./updateSmtpTemplateSender");
const updateWebhook_1 = require("./updateWebhook");
const updateWhatsAppCampaign_1 = require("./updateWhatsAppCampaign");
const uploadImageModel_1 = require("./uploadImageModel");
const uploadImageToGallery_1 = require("./uploadImageToGallery");
const variablesItems_1 = require("./variablesItems");
const whatsappCampStats_1 = require("./whatsappCampStats");
const whatsappCampTemplate_1 = require("./whatsappCampTemplate");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "AbTestCampaignResult.WinningVersionEnum": abTestCampaignResult_1.AbTestCampaignResult.WinningVersionEnum,
    "AbTestCampaignResult.WinningCriteriaEnum": abTestCampaignResult_1.AbTestCampaignResult.WinningCriteriaEnum,
    "Cart.CurrencyEnum": cart_1.Cart.CurrencyEnum,
    "ConversationsMessage.TypeEnum": conversationsMessage_1.ConversationsMessage.TypeEnum,
    "ConversionSourceMetrics.ConversionSourceEnum": conversionSourceMetrics_1.ConversionSourceMetrics.ConversionSourceEnum,
    "CreateAttribute.TypeEnum": createAttribute_1.CreateAttribute.TypeEnum,
    "CreateChild.LanguageEnum": createChild_1.CreateChild.LanguageEnum,
    "CreateEmailCampaign.WinnerCriteriaEnum": createEmailCampaign_1.CreateEmailCampaign.WinnerCriteriaEnum,
    "CreateExternalFeed.AuthTypeEnum": createExternalFeed_1.CreateExternalFeed.AuthTypeEnum,
    "CreateSubAccount.LanguageEnum": createSubAccount_1.CreateSubAccount.LanguageEnum,
    "CreateWebhook.EventsEnum": createWebhook_1.CreateWebhook.EventsEnum,
    "CreateWebhook.TypeEnum": createWebhook_1.CreateWebhook.TypeEnum,
    "CreateWhatsAppTemplate.CategoryEnum": createWhatsAppTemplate_1.CreateWhatsAppTemplate.CategoryEnum,
    "CreateWhatsAppTemplate.SourceEnum": createWhatsAppTemplate_1.CreateWhatsAppTemplate.SourceEnum,
    "EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum": ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response_1.EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum,
    "EmailExportRecipients.RecipientsTypeEnum": emailExportRecipients_1.EmailExportRecipients.RecipientsTypeEnum,
    "ErrorModel.CodeEnum": errorModel_1.ErrorModel.CodeEnum,
    "ExportWebhooksHistory.TypeEnum": exportWebhooksHistory_1.ExportWebhooksHistory.TypeEnum,
    "ExportWebhooksHistory.EventEnum": exportWebhooksHistory_1.ExportWebhooksHistory.EventEnum,
    "GetAccountAllOfPlan.TypeEnum": getAccountAllOfPlan_1.GetAccountAllOfPlan.TypeEnum,
    "GetAccountAllOfPlan.CreditsTypeEnum": getAccountAllOfPlan_1.GetAccountAllOfPlan.CreditsTypeEnum,
    "GetAllExternalFeedsFeedsInner.AuthTypeEnum": getAllExternalFeedsFeedsInner_1.GetAllExternalFeedsFeedsInner.AuthTypeEnum,
    "GetAttributesAttributesInner.CategoryEnum": getAttributesAttributesInner_1.GetAttributesAttributesInner.CategoryEnum,
    "GetAttributesAttributesInner.TypeEnum": getAttributesAttributesInner_1.GetAttributesAttributesInner.TypeEnum,
    "GetCampaignOverview.TypeEnum": getCampaignOverview_1.GetCampaignOverview.TypeEnum,
    "GetCampaignOverview.StatusEnum": getCampaignOverview_1.GetCampaignOverview.StatusEnum,
    "GetEmailCampaign.TypeEnum": getEmailCampaign_1.GetEmailCampaign.TypeEnum,
    "GetEmailCampaign.StatusEnum": getEmailCampaign_1.GetEmailCampaign.StatusEnum,
    "GetEmailCampaignsCampaignsInner.TypeEnum": getEmailCampaignsCampaignsInner_1.GetEmailCampaignsCampaignsInner.TypeEnum,
    "GetEmailCampaignsCampaignsInner.StatusEnum": getEmailCampaignsCampaignsInner_1.GetEmailCampaignsCampaignsInner.StatusEnum,
    "GetEmailEventReportEventsInner.EventEnum": getEmailEventReportEventsInner_1.GetEmailEventReportEventsInner.EventEnum,
    "GetExtendedCampaignOverview.TypeEnum": getExtendedCampaignOverview_1.GetExtendedCampaignOverview.TypeEnum,
    "GetExtendedCampaignOverview.StatusEnum": getExtendedCampaignOverview_1.GetExtendedCampaignOverview.StatusEnum,
    "GetExternalFeedByUUID.AuthTypeEnum": getExternalFeedByUUID_1.GetExternalFeedByUUID.AuthTypeEnum,
    "GetInboundEmailEventsByUuidLogsInner.TypeEnum": getInboundEmailEventsByUuidLogsInner_1.GetInboundEmailEventsByUuidLogsInner.TypeEnum,
    "GetPaymentRequest.StatusEnum": getPaymentRequest_1.GetPaymentRequest.StatusEnum,
    "GetProcess.StatusEnum": getProcess_1.GetProcess.StatusEnum,
    "GetScheduledEmailByBatchIdBatchesInner.StatusEnum": getScheduledEmailByBatchIdBatchesInner_1.GetScheduledEmailByBatchIdBatchesInner.StatusEnum,
    "GetScheduledEmailByMessageId.StatusEnum": getScheduledEmailByMessageId_1.GetScheduledEmailByMessageId.StatusEnum,
    "GetSmsCampaign.StatusEnum": getSmsCampaign_1.GetSmsCampaign.StatusEnum,
    "GetSmsCampaignOverview.StatusEnum": getSmsCampaignOverview_1.GetSmsCampaignOverview.StatusEnum,
    "GetSmsCampaignsCampaignsInner.StatusEnum": getSmsCampaignsCampaignsInner_1.GetSmsCampaignsCampaignsInner.StatusEnum,
    "GetSmsEventReportEventsInner.EventEnum": getSmsEventReportEventsInner_1.GetSmsEventReportEventsInner.EventEnum,
    "GetTransacBlockedContactsContactsInnerReason.CodeEnum": getTransacBlockedContactsContactsInnerReason_1.GetTransacBlockedContactsContactsInnerReason.CodeEnum,
    "GetWebhook.TypeEnum": getWebhook_1.GetWebhook.TypeEnum,
    "GetWhatsAppConfig.PhoneNumberQualityEnum": getWhatsAppConfig_1.GetWhatsAppConfig.PhoneNumberQualityEnum,
    "GetWhatsAppConfig.PhoneNumberNameStatusEnum": getWhatsAppConfig_1.GetWhatsAppConfig.PhoneNumberNameStatusEnum,
    "GetWhatsappCampaignOverview.CampaignStatusEnum": getWhatsappCampaignOverview_1.GetWhatsappCampaignOverview.CampaignStatusEnum,
    "GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum": getWhatsappCampaignsCampaignsInner_1.GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum,
    "GetWhatsappEventReportEventsInner.EventEnum": getWhatsappEventReportEventsInner_1.GetWhatsappEventReportEventsInner.EventEnum,
    "InviteAdminUserPrivilegesInner.FeatureEnum": inviteAdminUserPrivilegesInner_1.InviteAdminUserPrivilegesInner.FeatureEnum,
    "InviteAdminUserPrivilegesInner.PermissionsEnum": inviteAdminUserPrivilegesInner_1.InviteAdminUserPrivilegesInner.PermissionsEnum,
    "InviteuserPrivilegesInner.FeatureEnum": inviteuserPrivilegesInner_1.InviteuserPrivilegesInner.FeatureEnum,
    "InviteuserPrivilegesInner.PermissionsEnum": inviteuserPrivilegesInner_1.InviteuserPrivilegesInner.PermissionsEnum,
    "MasterDetailsResponsePlanInfo.PlanPeriodEnum": masterDetailsResponsePlanInfo_1.MasterDetailsResponsePlanInfo.PlanPeriodEnum,
    "Notification.ChannelEnum": notification_1.Notification.ChannelEnum,
    "RequestContactExportCustomContactFilter.ActionForContactsEnum": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter.ActionForContactsEnum,
    "RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter.ActionForEmailCampaignsEnum,
    "RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter.ActionForSmsCampaignsEnum,
    "RequestSmsRecipientExport.RecipientsTypeEnum": requestSmsRecipientExport_1.RequestSmsRecipientExport.RecipientsTypeEnum,
    "SendReport.LanguageEnum": sendReport_1.SendReport.LanguageEnum,
    "SendTransacSms.TypeEnum": sendTransacSms_1.SendTransacSms.TypeEnum,
    "SsoTokenRequest.TargetEnum": ssoTokenRequest_1.SsoTokenRequest.TargetEnum,
    "TaskReminder.UnitEnum": taskReminder_1.TaskReminder.UnitEnum,
    "UpdateCampaignStatus.StatusEnum": updateCampaignStatus_1.UpdateCampaignStatus.StatusEnum,
    "UpdateEmailCampaign.WinnerCriteriaEnum": updateEmailCampaign_1.UpdateEmailCampaign.WinnerCriteriaEnum,
    "UpdateExternalFeed.AuthTypeEnum": updateExternalFeed_1.UpdateExternalFeed.AuthTypeEnum,
    "UpdateWebhook.EventsEnum": updateWebhook_1.UpdateWebhook.EventsEnum,
    "UpdateWhatsAppCampaign.CampaignStatusEnum": updateWhatsAppCampaign_1.UpdateWhatsAppCampaign.CampaignStatusEnum,
};
let typeMap = {
    "AbTestCampaignResult": abTestCampaignResult_1.AbTestCampaignResult,
    "AbTestCampaignResultClickedLinks": abTestCampaignResultClickedLinks_1.AbTestCampaignResultClickedLinks,
    "AbTestCampaignResultStatistics": abTestCampaignResultStatistics_1.AbTestCampaignResultStatistics,
    "AbTestVersionClicksInner": abTestVersionClicksInner_1.AbTestVersionClicksInner,
    "AbTestVersionStats": abTestVersionStats_1.AbTestVersionStats,
    "AddChildDomain": addChildDomain_1.AddChildDomain,
    "AddContactToList": addContactToList_1.AddContactToList,
    "AddCredits": addCredits_1.AddCredits,
    "AuthenticateDomainModel": authenticateDomainModel_1.AuthenticateDomainModel,
    "BlockDomain": blockDomain_1.BlockDomain,
    "Cart": cart_1.Cart,
    "CompaniesIdPatchRequest": companiesIdPatchRequest_1.CompaniesIdPatchRequest,
    "CompaniesLinkUnlinkIdPatchRequest": companiesLinkUnlinkIdPatchRequest_1.CompaniesLinkUnlinkIdPatchRequest,
    "CompaniesList": companiesList_1.CompaniesList,
    "CompaniesPost200Response": companiesPost200Response_1.CompaniesPost200Response,
    "CompaniesPostRequest": companiesPostRequest_1.CompaniesPostRequest,
    "Company": company_1.Company,
    "CompanyAttributesInner": companyAttributesInner_1.CompanyAttributesInner,
    "ComponentItems": componentItems_1.ComponentItems,
    "Configuration": configuration_1.Configuration,
    "ConversationsAgentOnlinePingPostRequest": conversationsAgentOnlinePingPostRequest_1.ConversationsAgentOnlinePingPostRequest,
    "ConversationsMessage": conversationsMessage_1.ConversationsMessage,
    "ConversationsMessageFile": conversationsMessageFile_1.ConversationsMessageFile,
    "ConversationsMessageFileImageInfo": conversationsMessageFileImageInfo_1.ConversationsMessageFileImageInfo,
    "ConversationsMessagesIdPutRequest": conversationsMessagesIdPutRequest_1.ConversationsMessagesIdPutRequest,
    "ConversationsMessagesPostRequest": conversationsMessagesPostRequest_1.ConversationsMessagesPostRequest,
    "ConversationsPushedMessagesIdPutRequest": conversationsPushedMessagesIdPutRequest_1.ConversationsPushedMessagesIdPutRequest,
    "ConversationsPushedMessagesPostRequest": conversationsPushedMessagesPostRequest_1.ConversationsPushedMessagesPostRequest,
    "ConversionSourceMetrics": conversionSourceMetrics_1.ConversionSourceMetrics,
    "ConversionSourceProduct": conversionSourceProduct_1.ConversionSourceProduct,
    "CorporateGroupDetailsResponse": corporateGroupDetailsResponse_1.CorporateGroupDetailsResponse,
    "CorporateGroupDetailsResponseGroup": corporateGroupDetailsResponseGroup_1.CorporateGroupDetailsResponseGroup,
    "CorporateGroupDetailsResponseSubAccountsInner": corporateGroupDetailsResponseSubAccountsInner_1.CorporateGroupDetailsResponseSubAccountsInner,
    "CorporateGroupDetailsResponseUsersInner": corporateGroupDetailsResponseUsersInner_1.CorporateGroupDetailsResponseUsersInner,
    "CorporateGroupPost201Response": corporateGroupPost201Response_1.CorporateGroupPost201Response,
    "CorporateGroupPostRequest": corporateGroupPostRequest_1.CorporateGroupPostRequest,
    "CorporateGroupUnlinkGroupIdSubAccountsPutRequest": corporateGroupUnlinkGroupIdSubAccountsPutRequest_1.CorporateGroupUnlinkGroupIdSubAccountsPutRequest,
    "CorporateSubAccountIpAssociatePostRequest": corporateSubAccountIpAssociatePostRequest_1.CorporateSubAccountIpAssociatePostRequest,
    "CorporateSubAccountIpDissociatePutRequest": corporateSubAccountIpDissociatePutRequest_1.CorporateSubAccountIpDissociatePutRequest,
    "CorporateUserInvitationActionEmailPut200Response": corporateUserInvitationActionEmailPut200Response_1.CorporateUserInvitationActionEmailPut200Response,
    "CreateApiKeyRequest": createApiKeyRequest_1.CreateApiKeyRequest,
    "CreateApiKeyResponse": createApiKeyResponse_1.CreateApiKeyResponse,
    "CreateAttribute": createAttribute_1.CreateAttribute,
    "CreateAttributeEnumerationInner": createAttributeEnumerationInner_1.CreateAttributeEnumerationInner,
    "CreateCategoryModel": createCategoryModel_1.CreateCategoryModel,
    "CreateChild": createChild_1.CreateChild,
    "CreateContact": createContact_1.CreateContact,
    "CreateCouponCollection201Response": createCouponCollection201Response_1.CreateCouponCollection201Response,
    "CreateCouponCollectionRequest": createCouponCollectionRequest_1.CreateCouponCollectionRequest,
    "CreateCouponsRequest": createCouponsRequest_1.CreateCouponsRequest,
    "CreateDoiContact": createDoiContact_1.CreateDoiContact,
    "CreateDomain": createDomain_1.CreateDomain,
    "CreateDomainModel": createDomainModel_1.CreateDomainModel,
    "CreateDomainModelDnsRecords": createDomainModelDnsRecords_1.CreateDomainModelDnsRecords,
    "CreateDomainModelDnsRecordsDkimRecord": createDomainModelDnsRecordsDkimRecord_1.CreateDomainModelDnsRecordsDkimRecord,
    "CreateEmailCampaign": createEmailCampaign_1.CreateEmailCampaign,
    "CreateEmailCampaignRecipients": createEmailCampaignRecipients_1.CreateEmailCampaignRecipients,
    "CreateEmailCampaignSender": createEmailCampaignSender_1.CreateEmailCampaignSender,
    "CreateExternalFeed": createExternalFeed_1.CreateExternalFeed,
    "CreateExternalFeed201Response": createExternalFeed201Response_1.CreateExternalFeed201Response,
    "CreateList": createList_1.CreateList,
    "CreateModel": createModel_1.CreateModel,
    "CreatePaymentRequest": createPaymentRequest_1.CreatePaymentRequest,
    "CreatePaymentResponse": createPaymentResponse_1.CreatePaymentResponse,
    "CreateProductModel": createProductModel_1.CreateProductModel,
    "CreateReseller": createReseller_1.CreateReseller,
    "CreateSender": createSender_1.CreateSender,
    "CreateSenderIpsInner": createSenderIpsInner_1.CreateSenderIpsInner,
    "CreateSenderModel": createSenderModel_1.CreateSenderModel,
    "CreateSmsCampaign": createSmsCampaign_1.CreateSmsCampaign,
    "CreateSmsCampaignRecipients": createSmsCampaignRecipients_1.CreateSmsCampaignRecipients,
    "CreateSmtpEmail": createSmtpEmail_1.CreateSmtpEmail,
    "CreateSmtpTemplate": createSmtpTemplate_1.CreateSmtpTemplate,
    "CreateSmtpTemplateSender": createSmtpTemplateSender_1.CreateSmtpTemplateSender,
    "CreateSubAccount": createSubAccount_1.CreateSubAccount,
    "CreateSubAccountResponse": createSubAccountResponse_1.CreateSubAccountResponse,
    "CreateUpdateBatchCategory": createUpdateBatchCategory_1.CreateUpdateBatchCategory,
    "CreateUpdateBatchCategoryModel": createUpdateBatchCategoryModel_1.CreateUpdateBatchCategoryModel,
    "CreateUpdateBatchProducts": createUpdateBatchProducts_1.CreateUpdateBatchProducts,
    "CreateUpdateBatchProductsModel": createUpdateBatchProductsModel_1.CreateUpdateBatchProductsModel,
    "CreateUpdateCategories": createUpdateCategories_1.CreateUpdateCategories,
    "CreateUpdateCategory": createUpdateCategory_1.CreateUpdateCategory,
    "CreateUpdateContactModel": createUpdateContactModel_1.CreateUpdateContactModel,
    "CreateUpdateFolder": createUpdateFolder_1.CreateUpdateFolder,
    "CreateUpdateProduct": createUpdateProduct_1.CreateUpdateProduct,
    "CreateUpdateProducts": createUpdateProducts_1.CreateUpdateProducts,
    "CreateWebhook": createWebhook_1.CreateWebhook,
    "CreateWhatsAppCampaign": createWhatsAppCampaign_1.CreateWhatsAppCampaign,
    "CreateWhatsAppCampaignRecipients": createWhatsAppCampaignRecipients_1.CreateWhatsAppCampaignRecipients,
    "CreateWhatsAppTemplate": createWhatsAppTemplate_1.CreateWhatsAppTemplate,
    "CreatedBatchId": createdBatchId_1.CreatedBatchId,
    "CreatedProcessId": createdProcessId_1.CreatedProcessId,
    "CrmDealsIdPatchRequest": crmDealsIdPatchRequest_1.CrmDealsIdPatchRequest,
    "CrmDealsLinkUnlinkIdPatchRequest": crmDealsLinkUnlinkIdPatchRequest_1.CrmDealsLinkUnlinkIdPatchRequest,
    "CrmDealsPost201Response": crmDealsPost201Response_1.CrmDealsPost201Response,
    "CrmDealsPostRequest": crmDealsPostRequest_1.CrmDealsPostRequest,
    "CrmTasksIdPatchRequest": crmTasksIdPatchRequest_1.CrmTasksIdPatchRequest,
    "CrmTasksPost201Response": crmTasksPost201Response_1.CrmTasksPost201Response,
    "CrmTasksPostRequest": crmTasksPostRequest_1.CrmTasksPostRequest,
    "Deal": deal_1.Deal,
    "DealAttributesInner": dealAttributesInner_1.DealAttributesInner,
    "DealsList": dealsList_1.DealsList,
    "DeleteHardbounces": deleteHardbounces_1.DeleteHardbounces,
    "EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response": ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response_1.EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response,
    "EcommerceAttributionMetricsGet200Response": ecommerceAttributionMetricsGet200Response_1.EcommerceAttributionMetricsGet200Response,
    "EcommerceAttributionMetricsGet200ResponseTotals": ecommerceAttributionMetricsGet200ResponseTotals_1.EcommerceAttributionMetricsGet200ResponseTotals,
    "EcommerceAttributionProductsConversionSourceConversionSourceIdGet200Response": ecommerceAttributionProductsConversionSourceConversionSourceIdGet200Response_1.EcommerceAttributionProductsConversionSourceConversionSourceIdGet200Response,
    "EcommerceConfigDisplayCurrencyGet200Response": ecommerceConfigDisplayCurrencyGet200Response_1.EcommerceConfigDisplayCurrencyGet200Response,
    "EmailExportRecipients": emailExportRecipients_1.EmailExportRecipients,
    "ErrorModel": errorModel_1.ErrorModel,
    "Event": event_1.Event,
    "EventIdentifiers": eventIdentifiers_1.EventIdentifiers,
    "ExportWebhooksHistory": exportWebhooksHistory_1.ExportWebhooksHistory,
    "FileData": fileData_1.FileData,
    "FileDownloadableLink": fileDownloadableLink_1.FileDownloadableLink,
    "GetAccount": getAccount_1.GetAccount,
    "GetAccountActivity": getAccountActivity_1.GetAccountActivity,
    "GetAccountActivityLogsInner": getAccountActivityLogsInner_1.GetAccountActivityLogsInner,
    "GetAccountAllOfMarketingAutomation": getAccountAllOfMarketingAutomation_1.GetAccountAllOfMarketingAutomation,
    "GetAccountAllOfPlan": getAccountAllOfPlan_1.GetAccountAllOfPlan,
    "GetAccountAllOfRelay": getAccountAllOfRelay_1.GetAccountAllOfRelay,
    "GetAccountAllOfRelayData": getAccountAllOfRelayData_1.GetAccountAllOfRelayData,
    "GetAggregatedReport": getAggregatedReport_1.GetAggregatedReport,
    "GetAllExternalFeeds": getAllExternalFeeds_1.GetAllExternalFeeds,
    "GetAllExternalFeedsFeedsInner": getAllExternalFeedsFeedsInner_1.GetAllExternalFeedsFeedsInner,
    "GetAttributes": getAttributes_1.GetAttributes,
    "GetAttributesAttributesInner": getAttributesAttributesInner_1.GetAttributesAttributesInner,
    "GetAttributesAttributesInnerEnumerationInner": getAttributesAttributesInnerEnumerationInner_1.GetAttributesAttributesInnerEnumerationInner,
    "GetBlockedDomains": getBlockedDomains_1.GetBlockedDomains,
    "GetCampaignOverview": getCampaignOverview_1.GetCampaignOverview,
    "GetCampaignRecipients": getCampaignRecipients_1.GetCampaignRecipients,
    "GetCampaignStats": getCampaignStats_1.GetCampaignStats,
    "GetCategories": getCategories_1.GetCategories,
    "GetCategoryDetails": getCategoryDetails_1.GetCategoryDetails,
    "GetChildAccountCreationStatus": getChildAccountCreationStatus_1.GetChildAccountCreationStatus,
    "GetChildDomain": getChildDomain_1.GetChildDomain,
    "GetChildInfo": getChildInfo_1.GetChildInfo,
    "GetChildInfoAllOfApiKeys": getChildInfoAllOfApiKeys_1.GetChildInfoAllOfApiKeys,
    "GetChildInfoAllOfApiKeysV2": getChildInfoAllOfApiKeysV2_1.GetChildInfoAllOfApiKeysV2,
    "GetChildInfoAllOfApiKeysV3": getChildInfoAllOfApiKeysV3_1.GetChildInfoAllOfApiKeysV3,
    "GetChildInfoAllOfCredits": getChildInfoAllOfCredits_1.GetChildInfoAllOfCredits,
    "GetChildInfoAllOfStatistics": getChildInfoAllOfStatistics_1.GetChildInfoAllOfStatistics,
    "GetChildrenList": getChildrenList_1.GetChildrenList,
    "GetChildrenListChildrenInner": getChildrenListChildrenInner_1.GetChildrenListChildrenInner,
    "GetClient": getClient_1.GetClient,
    "GetContactCampaignStats": getContactCampaignStats_1.GetContactCampaignStats,
    "GetContactCampaignStatsClickedInner": getContactCampaignStatsClickedInner_1.GetContactCampaignStatsClickedInner,
    "GetContactCampaignStatsClickedInnerLinksInner": getContactCampaignStatsClickedInnerLinksInner_1.GetContactCampaignStatsClickedInnerLinksInner,
    "GetContactCampaignStatsMessagesSentInner": getContactCampaignStatsMessagesSentInner_1.GetContactCampaignStatsMessagesSentInner,
    "GetContactCampaignStatsOpenedInner": getContactCampaignStatsOpenedInner_1.GetContactCampaignStatsOpenedInner,
    "GetContactCampaignStatsTransacAttributesInner": getContactCampaignStatsTransacAttributesInner_1.GetContactCampaignStatsTransacAttributesInner,
    "GetContactCampaignStatsUnsubscriptions": getContactCampaignStatsUnsubscriptions_1.GetContactCampaignStatsUnsubscriptions,
    "GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner": getContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner_1.GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner,
    "GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner": getContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner_1.GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner,
    "GetContactDetails": getContactDetails_1.GetContactDetails,
    "GetContacts": getContacts_1.GetContacts,
    "GetCorporateInvitedUsersList": getCorporateInvitedUsersList_1.GetCorporateInvitedUsersList,
    "GetCorporateInvitedUsersListUsersInner": getCorporateInvitedUsersListUsersInner_1.GetCorporateInvitedUsersListUsersInner,
    "GetCorporateInvitedUsersListUsersInnerFeatureAccess": getCorporateInvitedUsersListUsersInnerFeatureAccess_1.GetCorporateInvitedUsersListUsersInnerFeatureAccess,
    "GetCorporateInvitedUsersListUsersInnerGroups": getCorporateInvitedUsersListUsersInnerGroups_1.GetCorporateInvitedUsersListUsersInnerGroups,
    "GetCorporateUserPermission": getCorporateUserPermission_1.GetCorporateUserPermission,
    "GetCorporateUserPermissionFeatureAccess": getCorporateUserPermissionFeatureAccess_1.GetCorporateUserPermissionFeatureAccess,
    "GetCorporateUserPermissionGroupsInner": getCorporateUserPermissionGroupsInner_1.GetCorporateUserPermissionGroupsInner,
    "GetCouponCollection": getCouponCollection_1.GetCouponCollection,
    "GetDeviceBrowserStats": getDeviceBrowserStats_1.GetDeviceBrowserStats,
    "GetDomainConfigurationModel": getDomainConfigurationModel_1.GetDomainConfigurationModel,
    "GetDomainsList": getDomainsList_1.GetDomainsList,
    "GetDomainsListDomainsInner": getDomainsListDomainsInner_1.GetDomainsListDomainsInner,
    "GetEmailCampaign": getEmailCampaign_1.GetEmailCampaign,
    "GetEmailCampaigns": getEmailCampaigns_1.GetEmailCampaigns,
    "GetEmailCampaignsCampaignsInner": getEmailCampaignsCampaignsInner_1.GetEmailCampaignsCampaignsInner,
    "GetEmailEventReport": getEmailEventReport_1.GetEmailEventReport,
    "GetEmailEventReportEventsInner": getEmailEventReportEventsInner_1.GetEmailEventReportEventsInner,
    "GetExtendedCampaignOverview": getExtendedCampaignOverview_1.GetExtendedCampaignOverview,
    "GetExtendedCampaignOverviewAllOfSender": getExtendedCampaignOverviewAllOfSender_1.GetExtendedCampaignOverviewAllOfSender,
    "GetExtendedCampaignStats": getExtendedCampaignStats_1.GetExtendedCampaignStats,
    "GetExtendedClient": getExtendedClient_1.GetExtendedClient,
    "GetExtendedClientAllOfAddress": getExtendedClientAllOfAddress_1.GetExtendedClientAllOfAddress,
    "GetExtendedContactDetails": getExtendedContactDetails_1.GetExtendedContactDetails,
    "GetExtendedContactDetailsAllOfStatistics": getExtendedContactDetailsAllOfStatistics_1.GetExtendedContactDetailsAllOfStatistics,
    "GetExtendedContactDetailsAllOfStatisticsClicked": getExtendedContactDetailsAllOfStatisticsClicked_1.GetExtendedContactDetailsAllOfStatisticsClicked,
    "GetExtendedContactDetailsAllOfStatisticsLinks": getExtendedContactDetailsAllOfStatisticsLinks_1.GetExtendedContactDetailsAllOfStatisticsLinks,
    "GetExtendedContactDetailsAllOfStatisticsMessagesSent": getExtendedContactDetailsAllOfStatisticsMessagesSent_1.GetExtendedContactDetailsAllOfStatisticsMessagesSent,
    "GetExtendedContactDetailsAllOfStatisticsOpened": getExtendedContactDetailsAllOfStatisticsOpened_1.GetExtendedContactDetailsAllOfStatisticsOpened,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptions": getExtendedContactDetailsAllOfStatisticsUnsubscriptions_1.GetExtendedContactDetailsAllOfStatisticsUnsubscriptions,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription": getExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription_1.GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription,
    "GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription": getExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription_1.GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription,
    "GetExtendedList": getExtendedList_1.GetExtendedList,
    "GetExtendedListAllOfCampaignStats": getExtendedListAllOfCampaignStats_1.GetExtendedListAllOfCampaignStats,
    "GetExternalFeedByUUID": getExternalFeedByUUID_1.GetExternalFeedByUUID,
    "GetExternalFeedByUUIDHeadersInner": getExternalFeedByUUIDHeadersInner_1.GetExternalFeedByUUIDHeadersInner,
    "GetFolder": getFolder_1.GetFolder,
    "GetFolderLists": getFolderLists_1.GetFolderLists,
    "GetFolders": getFolders_1.GetFolders,
    "GetInboundEmailEvents": getInboundEmailEvents_1.GetInboundEmailEvents,
    "GetInboundEmailEventsByUuid": getInboundEmailEventsByUuid_1.GetInboundEmailEventsByUuid,
    "GetInboundEmailEventsByUuidAttachmentsInner": getInboundEmailEventsByUuidAttachmentsInner_1.GetInboundEmailEventsByUuidAttachmentsInner,
    "GetInboundEmailEventsByUuidLogsInner": getInboundEmailEventsByUuidLogsInner_1.GetInboundEmailEventsByUuidLogsInner,
    "GetInboundEmailEventsEventsInner": getInboundEmailEventsEventsInner_1.GetInboundEmailEventsEventsInner,
    "GetInvitedUsersList": getInvitedUsersList_1.GetInvitedUsersList,
    "GetInvitedUsersListUsersInner": getInvitedUsersListUsersInner_1.GetInvitedUsersListUsersInner,
    "GetInvitedUsersListUsersInnerFeatureAccess": getInvitedUsersListUsersInnerFeatureAccess_1.GetInvitedUsersListUsersInnerFeatureAccess,
    "GetIp": getIp_1.GetIp,
    "GetIpFromSender": getIpFromSender_1.GetIpFromSender,
    "GetIps": getIps_1.GetIps,
    "GetIpsFromSender": getIpsFromSender_1.GetIpsFromSender,
    "GetList": getList_1.GetList,
    "GetLists": getLists_1.GetLists,
    "GetListsListsInner": getListsListsInner_1.GetListsListsInner,
    "GetOrders": getOrders_1.GetOrders,
    "GetOrdersOrdersInner": getOrdersOrdersInner_1.GetOrdersOrdersInner,
    "GetPaymentRequest": getPaymentRequest_1.GetPaymentRequest,
    "GetProcess": getProcess_1.GetProcess,
    "GetProcesses": getProcesses_1.GetProcesses,
    "GetProductDetails": getProductDetails_1.GetProductDetails,
    "GetProducts": getProducts_1.GetProducts,
    "GetReports": getReports_1.GetReports,
    "GetReportsReportsInner": getReportsReportsInner_1.GetReportsReportsInner,
    "GetScheduledEmailByBatchId": getScheduledEmailByBatchId_1.GetScheduledEmailByBatchId,
    "GetScheduledEmailByBatchIdBatchesInner": getScheduledEmailByBatchIdBatchesInner_1.GetScheduledEmailByBatchIdBatchesInner,
    "GetScheduledEmailByMessageId": getScheduledEmailByMessageId_1.GetScheduledEmailByMessageId,
    "GetSegments": getSegments_1.GetSegments,
    "GetSegmentsSegments": getSegmentsSegments_1.GetSegmentsSegments,
    "GetSendersList": getSendersList_1.GetSendersList,
    "GetSendersListSendersInner": getSendersListSendersInner_1.GetSendersListSendersInner,
    "GetSendersListSendersInnerIpsInner": getSendersListSendersInnerIpsInner_1.GetSendersListSendersInnerIpsInner,
    "GetSharedTemplateUrl": getSharedTemplateUrl_1.GetSharedTemplateUrl,
    "GetSmsCampaign": getSmsCampaign_1.GetSmsCampaign,
    "GetSmsCampaignOverview": getSmsCampaignOverview_1.GetSmsCampaignOverview,
    "GetSmsCampaignStats": getSmsCampaignStats_1.GetSmsCampaignStats,
    "GetSmsCampaigns": getSmsCampaigns_1.GetSmsCampaigns,
    "GetSmsCampaignsCampaignsInner": getSmsCampaignsCampaignsInner_1.GetSmsCampaignsCampaignsInner,
    "GetSmsEventReport": getSmsEventReport_1.GetSmsEventReport,
    "GetSmsEventReportEventsInner": getSmsEventReportEventsInner_1.GetSmsEventReportEventsInner,
    "GetSmtpTemplateOverview": getSmtpTemplateOverview_1.GetSmtpTemplateOverview,
    "GetSmtpTemplateOverviewSender": getSmtpTemplateOverviewSender_1.GetSmtpTemplateOverviewSender,
    "GetSmtpTemplates": getSmtpTemplates_1.GetSmtpTemplates,
    "GetSsoToken": getSsoToken_1.GetSsoToken,
    "GetStatsByDevice": getStatsByDevice_1.GetStatsByDevice,
    "GetSubAccountGroups200ResponseInner": getSubAccountGroups200ResponseInner_1.GetSubAccountGroups200ResponseInner,
    "GetTransacAggregatedSmsReport": getTransacAggregatedSmsReport_1.GetTransacAggregatedSmsReport,
    "GetTransacBlockedContacts": getTransacBlockedContacts_1.GetTransacBlockedContacts,
    "GetTransacBlockedContactsContactsInner": getTransacBlockedContactsContactsInner_1.GetTransacBlockedContactsContactsInner,
    "GetTransacBlockedContactsContactsInnerReason": getTransacBlockedContactsContactsInnerReason_1.GetTransacBlockedContactsContactsInnerReason,
    "GetTransacEmailContent": getTransacEmailContent_1.GetTransacEmailContent,
    "GetTransacEmailContentEventsInner": getTransacEmailContentEventsInner_1.GetTransacEmailContentEventsInner,
    "GetTransacEmailsList": getTransacEmailsList_1.GetTransacEmailsList,
    "GetTransacEmailsListTransactionalEmailsInner": getTransacEmailsListTransactionalEmailsInner_1.GetTransacEmailsListTransactionalEmailsInner,
    "GetTransacSmsReport": getTransacSmsReport_1.GetTransacSmsReport,
    "GetTransacSmsReportReportsInner": getTransacSmsReportReportsInner_1.GetTransacSmsReportReportsInner,
    "GetUserPermission": getUserPermission_1.GetUserPermission,
    "GetUserPermissionPrivilegesInner": getUserPermissionPrivilegesInner_1.GetUserPermissionPrivilegesInner,
    "GetWATemplates": getWATemplates_1.GetWATemplates,
    "GetWATemplatesTemplatesInner": getWATemplatesTemplatesInner_1.GetWATemplatesTemplatesInner,
    "GetWebhook": getWebhook_1.GetWebhook,
    "GetWebhookAuth": getWebhookAuth_1.GetWebhookAuth,
    "GetWebhookHeadersInner": getWebhookHeadersInner_1.GetWebhookHeadersInner,
    "GetWebhooks": getWebhooks_1.GetWebhooks,
    "GetWhatsAppConfig": getWhatsAppConfig_1.GetWhatsAppConfig,
    "GetWhatsappCampaignOverview": getWhatsappCampaignOverview_1.GetWhatsappCampaignOverview,
    "GetWhatsappCampaigns": getWhatsappCampaigns_1.GetWhatsappCampaigns,
    "GetWhatsappCampaignsCampaignsInner": getWhatsappCampaignsCampaignsInner_1.GetWhatsappCampaignsCampaignsInner,
    "GetWhatsappEventReport": getWhatsappEventReport_1.GetWhatsappEventReport,
    "GetWhatsappEventReportEventsInner": getWhatsappEventReportEventsInner_1.GetWhatsappEventReportEventsInner,
    "InviteAdminUser": inviteAdminUser_1.InviteAdminUser,
    "InviteAdminUserPrivilegesInner": inviteAdminUserPrivilegesInner_1.InviteAdminUserPrivilegesInner,
    "Inviteuser": inviteuser_1.Inviteuser,
    "InviteuserPrivilegesInner": inviteuserPrivilegesInner_1.InviteuserPrivilegesInner,
    "ManageIp": manageIp_1.ManageIp,
    "MasterDetailsResponse": masterDetailsResponse_1.MasterDetailsResponse,
    "MasterDetailsResponseBillingInfo": masterDetailsResponseBillingInfo_1.MasterDetailsResponseBillingInfo,
    "MasterDetailsResponseBillingInfoAddress": masterDetailsResponseBillingInfoAddress_1.MasterDetailsResponseBillingInfoAddress,
    "MasterDetailsResponseBillingInfoName": masterDetailsResponseBillingInfoName_1.MasterDetailsResponseBillingInfoName,
    "MasterDetailsResponsePlanInfo": masterDetailsResponsePlanInfo_1.MasterDetailsResponsePlanInfo,
    "MasterDetailsResponsePlanInfoFeaturesInner": masterDetailsResponsePlanInfoFeaturesInner_1.MasterDetailsResponsePlanInfoFeaturesInner,
    "Note": note_1.Note,
    "NoteData": noteData_1.NoteData,
    "NoteId": noteId_1.NoteId,
    "Notification": notification_1.Notification,
    "Order": order_1.Order,
    "OrderBatch": orderBatch_1.OrderBatch,
    "OrderBilling": orderBilling_1.OrderBilling,
    "OrderProductsInner": orderProductsInner_1.OrderProductsInner,
    "Otp": otp_1.Otp,
    "Pipeline": pipeline_1.Pipeline,
    "PipelineStage": pipelineStage_1.PipelineStage,
    "PostContactInfo": postContactInfo_1.PostContactInfo,
    "PostContactInfoContacts": postContactInfoContacts_1.PostContactInfoContacts,
    "PostSendFailed": postSendFailed_1.PostSendFailed,
    "PostSendSmsTestFailed": postSendSmsTestFailed_1.PostSendSmsTestFailed,
    "PutRevokeUserPermission": putRevokeUserPermission_1.PutRevokeUserPermission,
    "Putresendcancelinvitation": putresendcancelinvitation_1.Putresendcancelinvitation,
    "RemainingCreditModel": remainingCreditModel_1.RemainingCreditModel,
    "RemainingCreditModelChild": remainingCreditModelChild_1.RemainingCreditModelChild,
    "RemainingCreditModelReseller": remainingCreditModelReseller_1.RemainingCreditModelReseller,
    "RemoveContactFromList": removeContactFromList_1.RemoveContactFromList,
    "RemoveCredits": removeCredits_1.RemoveCredits,
    "RequestContactExport": requestContactExport_1.RequestContactExport,
    "RequestContactExportCustomContactFilter": requestContactExportCustomContactFilter_1.RequestContactExportCustomContactFilter,
    "RequestContactImport": requestContactImport_1.RequestContactImport,
    "RequestContactImportJsonBodyInner": requestContactImportJsonBodyInner_1.RequestContactImportJsonBodyInner,
    "RequestContactImportNewList": requestContactImportNewList_1.RequestContactImportNewList,
    "RequestSmsRecipientExport": requestSmsRecipientExport_1.RequestSmsRecipientExport,
    "ScheduleSmtpEmail": scheduleSmtpEmail_1.ScheduleSmtpEmail,
    "SendReport": sendReport_1.SendReport,
    "SendReportEmail": sendReportEmail_1.SendReportEmail,
    "SendSms": sendSms_1.SendSms,
    "SendSmtpEmail": sendSmtpEmail_1.SendSmtpEmail,
    "SendSmtpEmailAttachmentInner": sendSmtpEmailAttachmentInner_1.SendSmtpEmailAttachmentInner,
    "SendSmtpEmailBccInner": sendSmtpEmailBccInner_1.SendSmtpEmailBccInner,
    "SendSmtpEmailCcInner": sendSmtpEmailCcInner_1.SendSmtpEmailCcInner,
    "SendSmtpEmailMessageVersionsInner": sendSmtpEmailMessageVersionsInner_1.SendSmtpEmailMessageVersionsInner,
    "SendSmtpEmailMessageVersionsInnerReplyTo": sendSmtpEmailMessageVersionsInnerReplyTo_1.SendSmtpEmailMessageVersionsInnerReplyTo,
    "SendSmtpEmailMessageVersionsInnerToInner": sendSmtpEmailMessageVersionsInnerToInner_1.SendSmtpEmailMessageVersionsInnerToInner,
    "SendSmtpEmailReplyTo": sendSmtpEmailReplyTo_1.SendSmtpEmailReplyTo,
    "SendSmtpEmailSender": sendSmtpEmailSender_1.SendSmtpEmailSender,
    "SendSmtpEmailToInner": sendSmtpEmailToInner_1.SendSmtpEmailToInner,
    "SendTestEmail": sendTestEmail_1.SendTestEmail,
    "SendTestSms": sendTestSms_1.SendTestSms,
    "SendTransacSms": sendTransacSms_1.SendTransacSms,
    "SendWhatsappMessage": sendWhatsappMessage_1.SendWhatsappMessage,
    "SendWhatsappMessage201Response": sendWhatsappMessage201Response_1.SendWhatsappMessage201Response,
    "SsoTokenRequest": ssoTokenRequest_1.SsoTokenRequest,
    "SsoTokenRequestCorporate": ssoTokenRequestCorporate_1.SsoTokenRequestCorporate,
    "SubAccountAppsToggleRequest": subAccountAppsToggleRequest_1.SubAccountAppsToggleRequest,
    "SubAccountDetailsResponse": subAccountDetailsResponse_1.SubAccountDetailsResponse,
    "SubAccountDetailsResponseGroupsInner": subAccountDetailsResponseGroupsInner_1.SubAccountDetailsResponseGroupsInner,
    "SubAccountDetailsResponsePlanInfo": subAccountDetailsResponsePlanInfo_1.SubAccountDetailsResponsePlanInfo,
    "SubAccountDetailsResponsePlanInfoCredits": subAccountDetailsResponsePlanInfoCredits_1.SubAccountDetailsResponsePlanInfoCredits,
    "SubAccountDetailsResponsePlanInfoCreditsEmails": subAccountDetailsResponsePlanInfoCreditsEmails_1.SubAccountDetailsResponsePlanInfoCreditsEmails,
    "SubAccountDetailsResponsePlanInfoCreditsSms": subAccountDetailsResponsePlanInfoCreditsSms_1.SubAccountDetailsResponsePlanInfoCreditsSms,
    "SubAccountDetailsResponsePlanInfoCreditsWpSubscribers": subAccountDetailsResponsePlanInfoCreditsWpSubscribers_1.SubAccountDetailsResponsePlanInfoCreditsWpSubscribers,
    "SubAccountDetailsResponsePlanInfoFeatures": subAccountDetailsResponsePlanInfoFeatures_1.SubAccountDetailsResponsePlanInfoFeatures,
    "SubAccountDetailsResponsePlanInfoFeaturesInbox": subAccountDetailsResponsePlanInfoFeaturesInbox_1.SubAccountDetailsResponsePlanInfoFeaturesInbox,
    "SubAccountDetailsResponsePlanInfoFeaturesLandingPage": subAccountDetailsResponsePlanInfoFeaturesLandingPage_1.SubAccountDetailsResponsePlanInfoFeaturesLandingPage,
    "SubAccountDetailsResponsePlanInfoFeaturesUsers": subAccountDetailsResponsePlanInfoFeaturesUsers_1.SubAccountDetailsResponsePlanInfoFeaturesUsers,
    "SubAccountUpdatePlanRequest": subAccountUpdatePlanRequest_1.SubAccountUpdatePlanRequest,
    "SubAccountUpdatePlanRequestCredits": subAccountUpdatePlanRequestCredits_1.SubAccountUpdatePlanRequestCredits,
    "SubAccountUpdatePlanRequestFeatures": subAccountUpdatePlanRequestFeatures_1.SubAccountUpdatePlanRequestFeatures,
    "SubAccountsResponse": subAccountsResponse_1.SubAccountsResponse,
    "SubAccountsResponseSubAccountsInner": subAccountsResponseSubAccountsInner_1.SubAccountsResponseSubAccountsInner,
    "SubAccountsResponseSubAccountsInnerGroupsInner": subAccountsResponseSubAccountsInnerGroupsInner_1.SubAccountsResponseSubAccountsInnerGroupsInner,
    "Task": task_1.Task,
    "TaskList": taskList_1.TaskList,
    "TaskReminder": taskReminder_1.TaskReminder,
    "TaskTypes": taskTypes_1.TaskTypes,
    "UpdateAttribute": updateAttribute_1.UpdateAttribute,
    "UpdateAttributeEnumerationInner": updateAttributeEnumerationInner_1.UpdateAttributeEnumerationInner,
    "UpdateBatchContacts": updateBatchContacts_1.UpdateBatchContacts,
    "UpdateBatchContactsContactsInner": updateBatchContactsContactsInner_1.UpdateBatchContactsContactsInner,
    "UpdateBatchContactsModel": updateBatchContactsModel_1.UpdateBatchContactsModel,
    "UpdateCampaignStatus": updateCampaignStatus_1.UpdateCampaignStatus,
    "UpdateChild": updateChild_1.UpdateChild,
    "UpdateChildAccountStatus": updateChildAccountStatus_1.UpdateChildAccountStatus,
    "UpdateChildDomain": updateChildDomain_1.UpdateChildDomain,
    "UpdateContact": updateContact_1.UpdateContact,
    "UpdateCouponCollection200Response": updateCouponCollection200Response_1.UpdateCouponCollection200Response,
    "UpdateCouponCollectionRequest": updateCouponCollectionRequest_1.UpdateCouponCollectionRequest,
    "UpdateEmailCampaign": updateEmailCampaign_1.UpdateEmailCampaign,
    "UpdateEmailCampaignRecipients": updateEmailCampaignRecipients_1.UpdateEmailCampaignRecipients,
    "UpdateEmailCampaignSender": updateEmailCampaignSender_1.UpdateEmailCampaignSender,
    "UpdateExternalFeed": updateExternalFeed_1.UpdateExternalFeed,
    "UpdateList": updateList_1.UpdateList,
    "UpdateSender": updateSender_1.UpdateSender,
    "UpdateSmsCampaign": updateSmsCampaign_1.UpdateSmsCampaign,
    "UpdateSmtpTemplate": updateSmtpTemplate_1.UpdateSmtpTemplate,
    "UpdateSmtpTemplateSender": updateSmtpTemplateSender_1.UpdateSmtpTemplateSender,
    "UpdateWebhook": updateWebhook_1.UpdateWebhook,
    "UpdateWhatsAppCampaign": updateWhatsAppCampaign_1.UpdateWhatsAppCampaign,
    "UploadImageModel": uploadImageModel_1.UploadImageModel,
    "UploadImageToGallery": uploadImageToGallery_1.UploadImageToGallery,
    "VariablesItems": variablesItems_1.VariablesItems,
    "WhatsappCampStats": whatsappCampStats_1.WhatsappCampStats,
    "WhatsappCampTemplate": whatsappCampTemplate_1.WhatsappCampTemplate,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
exports.HttpBearerAuth = HttpBearerAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map