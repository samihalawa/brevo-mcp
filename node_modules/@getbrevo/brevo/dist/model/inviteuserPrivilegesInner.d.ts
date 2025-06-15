export declare class InviteuserPrivilegesInner {
    'feature'?: InviteuserPrivilegesInner.FeatureEnum;
    'permissions'?: Array<InviteuserPrivilegesInner.PermissionsEnum>;
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
export declare namespace InviteuserPrivilegesInner {
    enum FeatureEnum {
        EmailCampaigns,
        SmsCampaigns,
        Contacts,
        Templates,
        Workflows,
        FacebookAds,
        LandingPages,
        TransactionalEmails,
        SmtpApi,
        UserManagement,
        SalesPlatform,
        Phone,
        Conversations,
        SendersDomainsDedicatedIps,
        PushNotifications
    }
    enum PermissionsEnum {
        CreateEditDelete,
        SendScheduleSuspend,
        View,
        Import,
        Export,
        ListAndAttributes,
        Forms,
        ActivateDeactivate,
        ActivateDeactivatePause,
        Settings,
        SchedulePause,
        All,
        Logs,
        Access,
        Assign,
        Configure,
        ManageOwnedDealsTasksCompanies,
        ManageOthersDealsTasksCompanies,
        Reports,
        SendersManagement,
        DomainsManagement,
        DedicatedIpsManagement,
        Send,
        Smtp,
        ApiKeys,
        AuthorizedIps,
        None
    }
}
