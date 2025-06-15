"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteuserPrivilegesInner = void 0;
class InviteuserPrivilegesInner {
    static getAttributeTypeMap() {
        return InviteuserPrivilegesInner.attributeTypeMap;
    }
}
exports.InviteuserPrivilegesInner = InviteuserPrivilegesInner;
InviteuserPrivilegesInner.discriminator = undefined;
InviteuserPrivilegesInner.attributeTypeMap = [
    {
        "name": "feature",
        "baseName": "feature",
        "type": "InviteuserPrivilegesInner.FeatureEnum"
    },
    {
        "name": "permissions",
        "baseName": "permissions",
        "type": "Array<InviteuserPrivilegesInner.PermissionsEnum>"
    }
];
(function (InviteuserPrivilegesInner) {
    let FeatureEnum;
    (function (FeatureEnum) {
        FeatureEnum[FeatureEnum["EmailCampaigns"] = 'email_campaigns'] = "EmailCampaigns";
        FeatureEnum[FeatureEnum["SmsCampaigns"] = 'sms_campaigns'] = "SmsCampaigns";
        FeatureEnum[FeatureEnum["Contacts"] = 'contacts'] = "Contacts";
        FeatureEnum[FeatureEnum["Templates"] = 'templates'] = "Templates";
        FeatureEnum[FeatureEnum["Workflows"] = 'workflows'] = "Workflows";
        FeatureEnum[FeatureEnum["FacebookAds"] = 'facebook_ads'] = "FacebookAds";
        FeatureEnum[FeatureEnum["LandingPages"] = 'landing_pages'] = "LandingPages";
        FeatureEnum[FeatureEnum["TransactionalEmails"] = 'transactional_emails'] = "TransactionalEmails";
        FeatureEnum[FeatureEnum["SmtpApi"] = 'smtp_api'] = "SmtpApi";
        FeatureEnum[FeatureEnum["UserManagement"] = 'user_management'] = "UserManagement";
        FeatureEnum[FeatureEnum["SalesPlatform"] = 'sales_platform'] = "SalesPlatform";
        FeatureEnum[FeatureEnum["Phone"] = 'phone'] = "Phone";
        FeatureEnum[FeatureEnum["Conversations"] = 'conversations'] = "Conversations";
        FeatureEnum[FeatureEnum["SendersDomainsDedicatedIps"] = 'senders_domains_dedicated_ips'] = "SendersDomainsDedicatedIps";
        FeatureEnum[FeatureEnum["PushNotifications"] = 'push_notifications'] = "PushNotifications";
    })(FeatureEnum = InviteuserPrivilegesInner.FeatureEnum || (InviteuserPrivilegesInner.FeatureEnum = {}));
    let PermissionsEnum;
    (function (PermissionsEnum) {
        PermissionsEnum[PermissionsEnum["CreateEditDelete"] = 'create_edit_delete'] = "CreateEditDelete";
        PermissionsEnum[PermissionsEnum["SendScheduleSuspend"] = 'send_schedule_suspend'] = "SendScheduleSuspend";
        PermissionsEnum[PermissionsEnum["View"] = 'view'] = "View";
        PermissionsEnum[PermissionsEnum["Import"] = 'import'] = "Import";
        PermissionsEnum[PermissionsEnum["Export"] = 'export'] = "Export";
        PermissionsEnum[PermissionsEnum["ListAndAttributes"] = 'list_and_attributes'] = "ListAndAttributes";
        PermissionsEnum[PermissionsEnum["Forms"] = 'forms'] = "Forms";
        PermissionsEnum[PermissionsEnum["ActivateDeactivate"] = 'activate_deactivate'] = "ActivateDeactivate";
        PermissionsEnum[PermissionsEnum["ActivateDeactivatePause"] = 'activate_deactivate_pause'] = "ActivateDeactivatePause";
        PermissionsEnum[PermissionsEnum["Settings"] = 'settings'] = "Settings";
        PermissionsEnum[PermissionsEnum["SchedulePause"] = 'schedule_pause'] = "SchedulePause";
        PermissionsEnum[PermissionsEnum["All"] = 'all'] = "All";
        PermissionsEnum[PermissionsEnum["Logs"] = 'logs'] = "Logs";
        PermissionsEnum[PermissionsEnum["Access"] = 'access'] = "Access";
        PermissionsEnum[PermissionsEnum["Assign"] = 'assign'] = "Assign";
        PermissionsEnum[PermissionsEnum["Configure"] = 'configure'] = "Configure";
        PermissionsEnum[PermissionsEnum["ManageOwnedDealsTasksCompanies"] = 'manage_owned_deals_tasks_companies'] = "ManageOwnedDealsTasksCompanies";
        PermissionsEnum[PermissionsEnum["ManageOthersDealsTasksCompanies"] = 'manage_others_deals_tasks_companies'] = "ManageOthersDealsTasksCompanies";
        PermissionsEnum[PermissionsEnum["Reports"] = 'reports'] = "Reports";
        PermissionsEnum[PermissionsEnum["SendersManagement"] = 'senders_management'] = "SendersManagement";
        PermissionsEnum[PermissionsEnum["DomainsManagement"] = 'domains_management'] = "DomainsManagement";
        PermissionsEnum[PermissionsEnum["DedicatedIpsManagement"] = 'dedicated_ips_management'] = "DedicatedIpsManagement";
        PermissionsEnum[PermissionsEnum["Send"] = 'send'] = "Send";
        PermissionsEnum[PermissionsEnum["Smtp"] = 'smtp'] = "Smtp";
        PermissionsEnum[PermissionsEnum["ApiKeys"] = 'api_keys'] = "ApiKeys";
        PermissionsEnum[PermissionsEnum["AuthorizedIps"] = 'authorized_ips'] = "AuthorizedIps";
        PermissionsEnum[PermissionsEnum["None"] = 'none'] = "None";
    })(PermissionsEnum = InviteuserPrivilegesInner.PermissionsEnum || (InviteuserPrivilegesInner.PermissionsEnum = {}));
})(InviteuserPrivilegesInner = exports.InviteuserPrivilegesInner || (exports.InviteuserPrivilegesInner = {}));
//# sourceMappingURL=inviteuserPrivilegesInner.js.map