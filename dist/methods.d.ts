import { WebAPICallOptions, WebAPIResultCallback, WebAPICallResult } from './WebClient';
/**
 * Generic method definition
 */
export default interface Method<MethodArguments extends WebAPICallOptions> {
    (options?: MethodArguments): Promise<WebAPICallResult>;
    (options: MethodArguments, callback: WebAPIResultCallback): void;
}
export interface TokenOverridable {
    token?: string;
    [unknownArg: string]: any;
}
export interface CursorPaginationEnabled {
    limit?: number;
    cursor?: string;
}
export interface TimelinePaginationEnabled {
    oldest?: string;
    latest?: string;
    inclusive?: boolean;
}
export interface LocaleAware {
    include_locale?: boolean;
}
export interface MessageAttachment {
    fallback?: string;
    color?: 'good' | 'warning' | 'danger' | string;
    pretext?: string;
    author_name?: string;
    author_link?: string;
    author_icon?: string;
    title?: string;
    title_link?: string;
    text?: string;
    fields?: {
        title: string;
        value: string;
        short?: boolean;
    }[];
    image_url?: string;
    thumb_url?: string;
    footer?: string;
    footer_icon?: string;
    ts?: string;
    actions?: {
        type: 'button' | 'select';
        text?: string;
        name?: string;
        value?: string;
        style?: 'default' | 'primary' | 'danger';
        options?: any;
        option_groups?: any;
        data_source?: 'static' | 'users' | 'channels' | 'conversations' | 'external';
        selected_options?: any;
        confirm?: any;
        min_query_length?: any;
    }[];
}
export interface LinkUnfurls {
    [linkUrl: string]: MessageAttachment;
}
export declare type APITestArguments = {};
export declare type AppsPermissionsInfoArguments = TokenOverridable & {};
export declare type AppsPermissionsRequestArguments = TokenOverridable & {
    scopes: string;
    trigger_id: string;
};
export declare type AuthRevokeArguments = TokenOverridable & {
    test: boolean;
};
export declare type AuthTestArguments = TokenOverridable & {};
export declare type BotsInfoArguments = TokenOverridable & {
    bot?: string;
};
export declare type ChannelsArchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type ChannelsCreateArguments = TokenOverridable & {
    name: string;
    validate?: boolean;
};
export declare type ChannelsHistoryArguments = TokenOverridable & TimelinePaginationEnabled & {
    channel: string;
    count?: number;
    unreads?: boolean;
};
export declare type ChannelsInfoArguments = TokenOverridable & LocaleAware & {
    channel: string;
};
export declare type ChannelsInviteArguments = TokenOverridable & {
    channel: string;
    user: string;
};
export declare type ChannelsJoinArguments = TokenOverridable & {
    name: string;
    validate: boolean;
};
export declare type ChannelsKickArguments = TokenOverridable & {
    channel: string;
    user: string;
};
export declare type ChannelsLeaveArguments = TokenOverridable & {
    channel: string;
};
export declare type ChannelsListArguments = TokenOverridable & CursorPaginationEnabled & {
    exclude_archived: boolean;
    exclude_members: boolean;
};
export declare type ChannelsMarkArguments = TokenOverridable & {
    channel: string;
    ts: string;
};
export declare type ChannelsRenameArguments = TokenOverridable & {
    channel: string;
    name: string;
    validate?: boolean;
};
export declare type ChannelsRepliesArguments = TokenOverridable & {
    channel: string;
    thread_ts: string;
};
export declare type ChannelsSetPurposeArguments = TokenOverridable & {
    channel: string;
    purpose: string;
};
export declare type ChannelsSetTopicArguments = TokenOverridable & {
    channel: string;
    topic: string;
};
export declare type ChannelsUnarchiveArguments = TokenOverridable & {
    channel: string;
};
export declare type ChatDeleteArguments = TokenOverridable & {
    channel: string;
    ts: string;
    as_user?: boolean;
};
export declare type ChatGetPermalinkArguments = TokenOverridable & {
    channel: string;
    message_ts: string;
};
export declare type ChatMeMessageArguments = TokenOverridable & {
    channel: string;
    text: string;
};
export declare type ChatPostEphemeralArguments = TokenOverridable & {
    channel: string;
    text: string;
    user: string;
    as_user?: boolean;
    attachments?: MessageAttachment[];
    link_names?: boolean;
    parse?: 'full' | 'none';
};
export declare type ChatPostMessageArguments = TokenOverridable & {
    channel: string;
    text: string;
    as_user?: boolean;
    attachments?: MessageAttachment[];
    icon_emoji?: string;
    icon_url?: string;
    link_names?: boolean;
    mrkdwn?: boolean;
    parse?: 'full' | 'none';
    reply_broadcast?: boolean;
    thread_ts?: string;
    unfurl_links?: boolean;
    unfurl_media?: boolean;
    username?: string;
};
export declare type ChatUnfurlArguments = TokenOverridable & {
    channel: string;
    ts: string;
    unfurls: LinkUnfurls;
    user_auth_message?: string;
    user_auth_required?: boolean;
    user_auth_url?: string;
};
export declare type ChatUpdateArguments = TokenOverridable & {
    channel: string;
    text: string;
    ts: string;
    as_user?: boolean;
    attachments?: MessageAttachment[];
    link_names?: boolean;
    parse?: 'full' | 'none';
};
export declare type ConversationsArchiveArguments = TokenOverridable & {};
export declare type ConversationsCloseArguments = TokenOverridable & {};
export declare type ConversationsCreateArguments = TokenOverridable & {};
export declare type ConversationsHistoryArguments = TokenOverridable & {};
export declare type ConversationsInfoArguments = TokenOverridable & {};
export declare type ConversationsInviteArguments = TokenOverridable & {};
export declare type ConversationsJoinArguments = TokenOverridable & {};
export declare type ConversationsKickArguments = TokenOverridable & {};
export declare type ConversationsLeaveArguments = TokenOverridable & {};
export declare type ConversationsListArguments = TokenOverridable & {};
export declare type ConversationsMembersArguments = TokenOverridable & {};
export declare type ConversationsOpenArguments = TokenOverridable & {};
export declare type ConversationsRenameArguments = TokenOverridable & {};
export declare type ConversationsRepliesArguments = TokenOverridable & {};
export declare type ConversationsSetPurposeArguments = TokenOverridable & {};
export declare type ConversationsSetTopicArguments = TokenOverridable & {};
export declare type ConversationsUnarchiveArguments = TokenOverridable & {};
export declare type DialogOpenArguments = TokenOverridable & {};
export declare type DndEndDndArguments = TokenOverridable & {};
export declare type DndEndSnoozeArguments = TokenOverridable & {};
export declare type DndInfoArguments = TokenOverridable & {};
export declare type DndSetSnoozeArguments = TokenOverridable & {};
export declare type DndTeamInfoArguments = TokenOverridable & {};
export declare type EmojiListArguments = TokenOverridable & {};
export declare type FilesDeleteArguments = TokenOverridable & {};
export declare type FilesInfoArguments = TokenOverridable & {};
export declare type FilesListArguments = TokenOverridable & {};
export declare type FilesRevokePublicURLArguments = TokenOverridable & {};
export declare type FilesSharedPublicURLArguments = TokenOverridable & {};
export declare type FilesUploadArguments = TokenOverridable & {};
export declare type FilesCommentsAddArguments = TokenOverridable & {};
export declare type FilesCommentsDeleteArguments = TokenOverridable & {};
export declare type FilesCommentsEditArguments = TokenOverridable & {};
export declare type GroupsArchiveArguments = TokenOverridable & {};
export declare type GroupsCreateArguments = TokenOverridable & {};
export declare type GroupsCreateChildArguments = TokenOverridable & {};
export declare type GroupsHistoryArguments = TokenOverridable & {};
export declare type GroupsInfoArguments = TokenOverridable & {};
export declare type GroupsInviteArguments = TokenOverridable & {};
export declare type GroupsKickArguments = TokenOverridable & {};
export declare type GroupsLeaveArguments = TokenOverridable & {};
export declare type GroupsListArguments = TokenOverridable & {};
export declare type GroupsMarkArguments = TokenOverridable & {};
export declare type GroupsOpenArguments = TokenOverridable & {};
export declare type GroupsRenameArguments = TokenOverridable & {};
export declare type GroupsRepliesArguments = TokenOverridable & {};
export declare type GroupsSetPurposeArguments = TokenOverridable & {};
export declare type GroupsSetTopicArguments = TokenOverridable & {};
export declare type GroupsUnarchiveArguments = TokenOverridable & {};
export declare type IMCloseArguments = TokenOverridable & {};
export declare type IMHistoryArguments = TokenOverridable & {};
export declare type IMListArguments = TokenOverridable & {};
export declare type IMMarkArguments = TokenOverridable & {};
export declare type IMOpenArguments = TokenOverridable & {};
export declare type IMRepliesArguments = TokenOverridable & {};
export declare type MigrationExchangeArguments = TokenOverridable & {};
export declare type MPIMCloseArguments = TokenOverridable & {};
export declare type MPIMHistoryArguments = TokenOverridable & {};
export declare type MPIMListArguments = TokenOverridable & {};
export declare type MPIMMarkArguments = TokenOverridable & {};
export declare type MPIMOpenArguments = TokenOverridable & {};
export declare type MPIMRepliesArguments = TokenOverridable & {};
export declare type OAuthAccessArguments = TokenOverridable & {};
export declare type OAuthTokenArguments = TokenOverridable & {};
export declare type PinsAddArguments = TokenOverridable & {};
export declare type PinsListArguments = TokenOverridable & {};
export declare type PinsRemoveArguments = TokenOverridable & {};
export declare type ReactionsAddArguments = TokenOverridable & {};
export declare type ReactionsGetArguments = TokenOverridable & {};
export declare type ReactionsListArguments = TokenOverridable & {};
export declare type ReactionsRemoveArguments = TokenOverridable & {};
export declare type RemindersAddArguments = TokenOverridable & {};
export declare type RemindersCompleteArguments = TokenOverridable & {};
export declare type RemindersDeleteArguments = TokenOverridable & {};
export declare type RemindersInfoArguments = TokenOverridable & {};
export declare type RemindersListArguments = TokenOverridable & {};
export declare type RTMConnectArguments = TokenOverridable & {};
export declare type RTMStartArguments = TokenOverridable & {};
export declare type SearchAllArguments = TokenOverridable & {};
export declare type SearchFilesArguments = TokenOverridable & {};
export declare type SearchMessagesArguments = TokenOverridable & {};
export declare type StarsAddArguments = TokenOverridable & {};
export declare type StarsListArguments = TokenOverridable & {};
export declare type StarsRemoveArguments = TokenOverridable & {};
export declare type TeamAccessLogsArguments = TokenOverridable & {};
export declare type TeamBillableInfoArguments = TokenOverridable & {};
export declare type TeamInfoArguments = TokenOverridable & {};
export declare type TeamIntegrationLogsArguments = TokenOverridable & {};
export declare type TeamProfileGetArguments = TokenOverridable & {};
export declare type UsergroupsCreateArguments = TokenOverridable & {};
export declare type UsergroupsDisableArguments = TokenOverridable & {};
export declare type UsergroupsEnableArguments = TokenOverridable & {};
export declare type UsergroupsListArguments = TokenOverridable & {};
export declare type UsergroupsUpdateArguments = TokenOverridable & {};
export declare type UsergroupsUsersListArguments = TokenOverridable & {};
export declare type UsergroupsUsersUpdateArguments = TokenOverridable & {};
export declare type UsersInfoArguments = TokenOverridable & {
    user: string;
};
export declare type UsersListArguments = TokenOverridable & CursorPaginationEnabled & LocaleAware & {
    presence?: boolean;
};
export declare type UsersLookupByEmailArguments = TokenOverridable & {
    email: string;
};
export declare type UsersGetPresenceArguments = TokenOverridable & {
    user: string;
};
export declare type UsersIdentityArguments = TokenOverridable & {};
export declare type UsersSetActiveArguments = TokenOverridable & {};
export declare type UsersSetPhotoArguments = TokenOverridable & {
    image: string;
    crop_w?: number;
    crop_x?: number;
    crop_y?: number;
};
export declare type UsersDeletePhotoArguments = TokenOverridable & {};
export declare type UsersSetPresenceArguments = TokenOverridable & {
    presence: 'auto' | 'away';
};
export declare type UsersProfileGetArguments = TokenOverridable & {};
export declare type UsersProfileSetArguments = TokenOverridable & {};
